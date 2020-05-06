import React, {useState} from "react";
import {useSelector} from "../../../store/types/appState";
import {useParams} from "react-router-dom";
import {Card, Deck} from "../../../model/Deck";
import {CardContainer} from "./CardContainer";
import {KeyPressDetector, KeyPressEvent} from "../../util/KeyPressDetectory";
import {currentIndex, nextIndex, prevIndex} from "../../../misc/RingBuffer";
import {CardControlBar} from "./CardControlBar";
import {useDispatch} from "react-redux";
import {updateCard, updateDecks} from "../../../store/actions/deck";
import {compare} from "../../../misc/Sorting";
import {Word} from "../../common/Word";
import {BackendClient} from "../../../service/BackendClient";


export const CardPage: React.FC = () => {

    const { uuid } = useParams();
    const decks = useSelector(state => state.deck.decks);
    const auth = useSelector(state => state.auth.tokenData);
    const deck = decks.find(deck => deck.uuid === uuid);
    const [index, setIndex] = useState(0);
    const [turned, setTurned] = useState<boolean>(false);
    const [filteredCards, setFilteredCards] =
        useState<{filteredCards:Card[], leechOnly: boolean}>({filteredCards: deck?.cards ?? [], leechOnly: false});

    const dispatch = useDispatch();
    const dispatchCard = (decks: Deck[], deckId: string, card: Card) => dispatch(updateCard(decks, deckId, card));

    const currentCard = filteredCards.filteredCards[index];

    const keyPressEvents : KeyPressEvent[] = [
        {keyName: "ArrowLeft", callback: prev},
        {keyName: "ArrowRight", callback: next},
        {keyName: "ArrowUp", callback: prev},
        {keyName: "ArrowDown", callback: next}
    ];

    return (
        <React.Fragment>
            <KeyPressDetector events={keyPressEvents} >
                { currentCard && (
                    <React.Fragment>
                        <CardControlBar onNext={next} onPrev={prev} onLeechOnly={leechOnlyPressed}
                                        leechOnlyIsPressed={filteredCards.leechOnly}
                                        current={index+1} max={filteredCards.filteredCards.length}/>
                        <CardContainer card={currentCard} turned={turned} onClick={cardClicked} onLeechClick={leechCurrentCard}/>
                    </React.Fragment>
                ) || (
                    <React.Fragment>
                        <CardControlBar onNext={next} onPrev={prev} onLeechOnly={leechOnlyPressed}
                                        leechOnlyIsPressed={filteredCards.leechOnly}
                                        current={0} max={0}/>
                        <Word>
                            No cards to display :(
                        </Word>
                    </React.Fragment>
                )}
            </KeyPressDetector>
        </React.Fragment>
    );

    function updatedFilteredList(newInput: {filteredCards: Card[], leechOnly: boolean}) {
        if (newInput.leechOnly) {
            setFilteredCards({
                filteredCards: newInput.filteredCards.filter(card => card.leech).sort(compare) ?? [],
                leechOnly: newInput.leechOnly
            })
        } else {
            setFilteredCards(newInput)
        }
    }

    function leechCurrentCard() {
        if (deck !== undefined && currentCard !== undefined) {
            currentCard.leech = !currentCard.leech;
            dispatchCard(decks, deck.uuid, currentCard);
            BackendClient.patchCard(deck.uuid, {
                uuid: currentCard.uuid,
                leech: currentCard.leech
            }, auth?.idToken).catch(problem => {console.log(`Problem while updating card ${problem}`)});

            if (filteredCards.filteredCards.length < 2) {
                updatedFilteredList({filteredCards: deck?.cards ?? [], leechOnly: false});
                setTurned(false)
            } else if (filteredCards.leechOnly) {
                if (!currentCard.leech) {
                    setIndex(currentIndex(index, filteredCards.filteredCards.length - 2));
                }
                setTurned(false);
                updatedFilteredList(filteredCards)
            }
        }

    }

    function leechOnlyPressed() {
        updatedFilteredList({filteredCards: deck?.cards ?? [], leechOnly: !filteredCards.leechOnly});
        setIndex(0);
        setTurned(false)
    }

    function cardClicked() {
        setTurned(!turned)
    }

    function prev() {
        setTurned(false);
        setIndex(prevIndex(index, (filteredCards.filteredCards.length ?? 0) - 1))
    }

    function next() {
        setTurned(false);
        setIndex(nextIndex(index, (filteredCards.filteredCards.length ?? 0) - 1))
    }

};
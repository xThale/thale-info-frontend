import {DevConfig} from "./DevConfig";

/**
 * Config determining the width for media queries
 */
export interface MediaConfig {
    xxsmall: number
    xsmall: number
    small: number
    medium: number
    large: number
    xlarge: number
}

/**
 * Config for css widths and heights
 */
export interface CssValues {
    navBarHeight: number
}

/**
 * Config for the website theme
 */
export interface ThemeConfig {
    lighter: string
    light: string
    normal: string
    dark: string
    darker: string

    headerBarTextColor: string

    title: string
    text: string

    navigationActiveButtonColor: string

    fontFamily: string
}

/**
 * Config for auth
 */
export interface AuthConfig {
    googleClientId: string
}

/**
 * Config regarding the backend
 */
export interface BackendConfig {
    backendServerUrl: string
    loginUrl: string
    deckUrl: string
}

/**
 * The whole config
 */
export interface Configuration {
    theme: ThemeConfig,
    backend: BackendConfig,
    auth: AuthConfig,
    media: MediaConfig,
    css: CssValues
}

let Config : Configuration
if (process.env.NODE_ENV === "development") {
    Config = DevConfig
} else {
    Config = DevConfig
}
export default Config
/**
 * Config for the website theme
 */
interface ThemeConfig {
    lighter: string
    light: string
    normal: string
    dark: string
    darker: string
    title: string
    fontFamily: string
}

const themeConfig : ThemeConfig = {
    lighter: "#A75DB7",
    light: "#8C389E",
    normal: "#7E1E93",
    dark: "#650E77",
    darker: "#4E025E",
    title: "#C59FCE",
    fontFamily: "Roboto"
};

/**
 * Config for auth
 */
interface AuthConfig {
    googleClientId: string
}

const authConfig : AuthConfig = {
    googleClientId: "544855491648-77v54qbigd0l0un8dd7ioam0nrs68h7c.apps.googleusercontent.com"
};


/**
 * Config regarding the backend
 */
interface BackendConfig {
    backendServerUrl : string
    loginUrl: string
}

const backendConfig : BackendConfig = {
    backendServerUrl: "http://localhost:8080/",
    loginUrl: "auth/login"
};


/**
 * The whole config
 */
interface Config {
    theme: ThemeConfig,
    backend: BackendConfig,
    auth: AuthConfig
}
const Config : Config = {
    theme: themeConfig,
    backend: backendConfig,
    auth: authConfig
};

export default Config
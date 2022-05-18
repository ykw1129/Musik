export const localGet = (key:string) => {
    let stringValue = window.localStorage.getItem(key)
    if (stringValue !== null) {
        let value = JSON.parse(stringValue)
        let expirationDate = new Date(value.expirationDate)
        if (expirationDate > new Date()) {
            return value.value
        } else {
            window.localStorage.removeItem(key)
        }
    }
    return null
}


export const localSet = (key:string, value:any, expirationInMin = 120)  => {
    let expirationDate = new Date(new Date().getTime() + (60000 * expirationInMin))
    let newValue = {
        value,
        expirationDate: expirationDate.toISOString()
    }
    window.localStorage.setItem(key, JSON.stringify(newValue))
}
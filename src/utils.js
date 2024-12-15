export function silentUpdate(newUrl) {
    if (typeof newUrl !== 'string') {
        throw new Error('The URL must be a string');
    }
    
    window.history.pushState(null, '', newUrl);
}
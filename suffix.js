function add_suffix(suffix) {
    let suffixAdded = function addOn(x) {
        return x + suffix;
    }
    return suffixAdded;
}
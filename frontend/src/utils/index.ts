export function buildPlayerSearchURL(body: any): string {
    var result = `?`;
    for(var key in body){
        if (body[key] !== ''){
            result += `${key}=${body[key]}&`
        }
    }
    // reomve trailing &
    return result.substring(0, result.length - 1);
}
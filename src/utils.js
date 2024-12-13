export const getData = async(data)=>{
    const response = await fetch(data);
    const result = await response.json();
    return result
}
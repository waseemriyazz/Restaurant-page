let flag = 0;

export default function clear(){
    console.log(flag);
    if(flag>0){
    const container = document.querySelector("#content");
    container.removeChild(container.lastChild);
    flag--;
    }
    


}
export function flagUp(){
    flag++;
}

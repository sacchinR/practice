import { NEW_STATE, UPDATE, FINISH } from "./types"

const newState = () => {
    return {
        type: NEW_STATE
    }
}

const checkCondition = (x, y, f,mat) => {
    let count = 0, i;

   

    for (i = x; i <= 2; i++) {
        if (mat[i][y] !== '' && mat[i][y] === f) {
            count++;
        }
        else {
            break;
        }
    }
    for (i = x - 1; i >= 0; i--) {
        if (mat[i][y] !== '' && mat[i][y] === f) {
            count++;
        }
        else {
            break
        }
    }

    if (count === 3) { return true };

    count = 0

    for (i = y; i <= 2; i++) {
        if (mat[x][i] !== '' && mat[x][i] === f) {
            count++;
        }
        else {
            break
        }
    }

    for (i = y - 1; i >= 0; i--) {
        if (mat[x][i] !== '' && mat[x][i] === f) {
            count++;
        }
        else {
            break
        }
    }

    if (count === 3) { return true };

    count = 0;

    for (i = x; i <= 2; i++) {
        if (mat[i][i] !== '' && mat[i][i] === f) {
            count++;
        }
        else {
            break
        }
    }

    for (i = x - 1; i >= 0; i--) {
        if (mat[i][i] !== '' && mat[i][i] === f) {
            count++;
        }
        else {
            break
        }
    }
    if (count === 3) { return true };
    count = 0
    for (i = x; i <= 2; i++) {
        if (mat[i][2 - i] !== '' && mat[i][2 - i] === f) {
            count++;
        }
        else {
            break
        }
    }
    for (i = x - 1; i >= 0; i--) {
        if (mat[i][2 - i] !== '' && mat[i][2 - i] === f) {
            count++;
        }
        else {
            break
        }
    }
    if (count === 3) { return true };
    return false

    
}


 const handleClick = (x, y, props) => {
    
    console.log("props",props)


     let loop=true

     for(let i=0;i<3;i++){
         for(let j=0;j<3;j++){
             if(props.checked[i][j]===false){
                 loop=true
                 break
             }
         }
         if(loop===true){
             break
         }
     }
 
 
     if(loop===true){
        let mat= props.matrix
         let f=props.flag
         let ch=props.checked
         let finish=props.finish
     
         
         let pass = f
         if (finish === false) {
             if (props.checked[x][y] === false) {
                 ch[x][y] = true
                 if (props.flag === 'x') {
     
                     mat[x][y] = 'x'
                     f = 'y'
                 }
                 else {
                     mat[x][y] = 'y'
                     f = 'x'
                 }
              
                 if (f === 'x') {
                     pass = 'y'
                 }
                 else {
                     pass = 'x'
                 }
                 const result = checkCondition(x, y, pass,mat)
     
     
                 if (result === true) {
                     mat[x][y] = pass
                     const data = {
                         matr: mat,
                         fl: f,
                         check: ch,
                         fin: true
                     }
                     window.alert("Player "+pass+" won the Match")
                     return {
                         type: UPDATE,
                         ...data
                     }
     
                   
                 }
                 else {
                     mat[x][y] = pass
                     const data = {
                         matr: mat,
                         fl: f,
                         check: ch,
                         fin: false
                        
                     }
     
                     return {
                         type: UPDATE,
                         ...data
                     }
                 }
     
             }
         }
         else {
     
             window.alert("Game Finished")
     
             return {
                 type: FINISH,
                 fin: true

             }
         }
     }
     else{
        return {
            type: FINISH,
            fin: true

        }
     }



}

export {newState,handleClick }
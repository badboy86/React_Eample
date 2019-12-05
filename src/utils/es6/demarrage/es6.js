export const func1 = toto => toto;

export const func2 = () => true;

export const transform = tab => tab.map((val,index) => `Nombre ${index+1} : ${val}`)


export const moyenne = tab => tab.reduce((acc,val) => acc+val,0)/tab.length

export const maxVal = tab => tab.reduce((acc,val) => (acc>val?acc:val))

export const mult = tab => tab.reduce((acc,val) => acc*val)
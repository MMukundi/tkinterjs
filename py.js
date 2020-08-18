let toLoad = ["helperFunc", "tkinter","tictac"]
print(tt)
let modulesReady
new Promise((res, rej) => {
    languagePluginLoader.then(function () {
        console.log(pyodide)
        modulesReady = Promise.all(toLoad.map(mod =>
            new Promise((res, rej) => {
                fetch(`./${mod}.py`).then(d => d.text()).then((t) => {
                    res(pyodide.runPython(t))
                    t=null
                })
            })

        ))
        // .then(()=>pyodide.loadPackage("re"))
        console.log(pyodide.runPython(`
                import sys
                sys.version
            `));
        pyodide.runPython('print(1 + 2)');

        // modulesReady.then((vals) => {
        //     newW()
        // })
    });
})
// function newW(){
//     return pyodide.runPython(`
//     a=Tk()
//     a.geometry("500x300")
// `)
// }
// let i = 1
// onkeydown = (e)=>{
//     // newW()
//     pyodide.runPython(`
//     b=Button(a,command = lambda x:print('${e.key}'),text = '${e.key}',color="red")
//     print("made button")
//     b.grid(column=${i}, row = ${i})
//     #b.geometry("500x300")
// `)
// i++
// }
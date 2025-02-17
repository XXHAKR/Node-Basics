
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }

  else if (text === 'list\n'){
    list();
  }

  else if(text.trim().split(" ")[0]==="hello") {
    hello(text.trim().substring(5));
  }

  else if (text.trim().split(" ")[0]==="add") {
    add(text.trim().substring(4));
  }

  else if (text.trim().split(" ")[0] === "remove") {
    remove(text.trim().substring(6));
  }

  else if(text==='help\n') {
    help();
  }

  else{
    unknownCommand(text);

  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */

 function hello(text){
  console.log(`hello${text}!`)
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 * prints 
 * "
 * command        desciption
 * .................................
 * hello          greeting user.
 * quit OR exit   end the application.
 * help           show command.
 * ..................................
 * "
 *
 * Help command used to get an idea of the script you are running
 * 
 * @returns {void}
 */

function help(){
  console.log(`
  command\t\tdescription

  ....................................
    hello\t\t\tuser greeting.
    \t\t\t\t(usage)- hello "name"
    
    quit or exit\t\tend the application.
    help\t\t\tshow script commands.
    list\t\t\tlist command used to show the list of tasks.
    add\t\t\t\tadd command used to add task to the tasks list.
    \t\t\t\t(usage)- add "taskname"

    remove\t\t\tremove command used to remove a task
    \t\t\t\tfrom the tasks list by the number of the task.
    \t\t\t\t(usage)- remove "number of task"
  ....................................
  `)
}

var List = Array("task1","task2");

function list() {
  console.log(
    List.map((element,key)=>`${key+1} - ${element}`).join('\n')
  )
}

function add(text) {
  if(text.length==0){ console.log("you didn't input any data");return;}
  List.push(text)
}

function remove(index) {
  if(index.length==0){List.pop(); return;} 
  if(Number(index) >=1 && Number(index) <=List.length) {List.splice(index-1, 1);return;}
  console.log(" type a valid number ")
}

// The following line starts the application
startApp("Ahmad Sabaa")

const today=new Date();
const yesterday=new Date();
yesterday.setDate(today.getDate()-1)

//tasks array of task objects
const tasks=[
    {id: 1, name: "Create clockit basic", xp: 20, completed: false},
    {id: 2, name: "Do dsa hard problem", xp: 30, completed: false},
    {id: 3, name: "Create hackerrank profile", xp: 10, completed: false},
]

//a user object
const user={
    totalXp: 90,
    level: 1,
    streak: 2,
    lastCompletedDate:yesterday,
}

//calculate level based on xp
function calculateLevel(user){
    user.level=Math.floor(user.xp/100)
}

//add xp gained to current xp
function addXP(xp,user){
    user.totalXp+=xp
}

//complete task function to complete a task which leads to adding xp and recalculating user level
function completeTask(task,user){
    if(task.completed==true) return
    task.completed=true

    addXP(task.xp,user)
    calculateLevel(user)
}

//update streak 
function updateStreak(user){

}

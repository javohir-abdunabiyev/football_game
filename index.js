const body = document.body
const ball = document.querySelector(".div_for_div")
const left_corner_ugol = document.querySelector(".left_corner_ugol")
const right_corner_ugol = document.querySelector(".right_corner_ugol")
const goal_text = document.querySelector(".goal_text")
const out_top_out = document.querySelector(".out_top_out")
const out_bottom_out = document.querySelector(".out_bottom_out")
const right_goal = document.querySelector(".right_goal")
const left_goal = document.querySelector(".left_goal")
const left_goal_counter = document.querySelector(".left_goal_counter")
const right_goal_counter = document.querySelector(".right_goal_counter")
const suiii_sound = document.querySelector(".sui_audio")




let left_goal_count = 0
let right_goal_count = 0

left_goal_counter.innerHTML = left_goal_count
right_goal_counter.innerHTML = right_goal_count



body.ondragover = (e) => {
    e.preventDefault()
}

left_corner_ugol.ondragenter = () => {
    corner("Угол");
}

right_corner_ugol.ondragenter = () => {
    corner("Угол")
}

out_top_out.ondragenter = () => {
    corner("Аут")
}

out_bottom_out.ondragenter = () => {
    corner("Аут")
}

right_goal.ondragenter = () => {
    corner("Гооооол")
    right_goal_count++
    right_goal_counter.innerHTML = right_goal_count
    goalSound()
}

left_goal.ondragenter = () => {
    corner("Гооооол")
    left_goal_count++
    left_goal_counter.innerHTML = left_goal_count
    goalSound()
}

function corner(text) {
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = text;
    body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 1500);
}


ball.ondragend = (e) => {
    const {x, y} = e

    ball.style.top = y + "px";
    ball.style.left = x + "px";
}


function goalSound() {
    suiii_sound.currentTime = 0
    suiii_sound.play()
}
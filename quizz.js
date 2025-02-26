const correctAnswers = ['A', 'A', 'B', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 20;
        }
    });
    // console.log(score); to see in console if it works

    // show the result on a page for user
    scrollTo(0, 0);
    // result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
// adding animation to the score
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});
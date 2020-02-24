const animatedForm = () => {
	const arrows = document.querySelectorAll('.fa-arrow-down');

	arrows.forEach((arrow) => {
		arrow.addEventListener('click', ()=>{
			const input = arrow.previousElementSibling;
			const parent = arrow.parentElement;
			const nextForm = parent.nextElementSibling;


			//Check for Validation
			if(input.type === && validateUser(input)){
				nextSlide(parent, nextForm);
			}else if(input.type ==='email' && validateEmail(input)){
				nextSlide(parent, nextForm);
			}else if(input.type ==='password' && validateUser){
				nextSlide(parent, nextForm);
			}else{
				parent.style.animated = 'shake 0.5s ease'
			}

			//get rid of animation
			parent.addEventListener('animationend', () => {
				parent.style.animation = "";
			})
		})
	})
}

function validatedUser(user){
	if(user.value.length < 6){
		console.log('not enough');
		error('rgb(187,87,87')
	}else{
		error('color===green')
		return true;
	}

}

function ValidateEmail(email){
	const Validation = /^[^s@]+@[^/s@]+/.[^s@]+$/;
	if(validation.test(email.value)){
		error('rgb(87,189,130');
		return true;


	}else{
		error('rgb(187,87,87');
	}
}

function nextSlide(parent, nextForm){
	parent.classList.add('innactive');
	parent.classlist.remove('active');
	nextForm.classList.add('active');
}

function error(color){
	document.body.style.backgroundColor = color;
}
animated();
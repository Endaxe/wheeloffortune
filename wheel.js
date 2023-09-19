export function wheel(element) {

    const wheelElement = element.querySelector('#wheel')
    const wheelImage = element.querySelector('#wheel-image')
    const spinButton = document.querySelector('#spin')

    
    
    const spin = (wheelRandom) => {
        spinButton.removeAttribute('disabled')
        wheelImage.classList.add('spin-stop')
        wheelElement.textContent = `The wheel spun ${wheelRandom}`
    }

 


    spinButton.addEventListener('click', () => {
        spinButton.setAttribute('disabled', true);
        const spinTime = 300
        const wheelRandom = Math.ceil(Math.random() * 12)
        
        wheelImage.classList.add('spin-it')

        setTimeout(() => {spin(wheelRandom)}, wheelRandom * spinTime)

    })
}



document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // ვიღებთ ფორმის მონაცემებს
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // აქ შეიძლება იყოს ფორმის ვალიდაციისთვის დამატებითი ლოგიკა
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // გამოტანისას alert-ს ვაჩვენებთ ან კონსოლში წარვადგენთ
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // ფორმის გასუფთავება გაგზავნის შემდეგ
    document.getElementById("contactForm").reset();
});

var hasDonated = false;

function doneerSubmit()
{
    // Get values van de form
    let form = document.getElementById('formDoneer');
    let naam = form.elements['Naam'].value.length > 0 ? form.elements['Naam'].value : "Anoniem";
    let bedrag = Number(form.elements['Bedrag'].value) ?? 0;

    // Als gedoneerd heeft, geen naam veranderen, anders zet er een naam neer
    if(!hasDonated) document.getElementById('Donators').querySelector("li").querySelector("p").innerHTML = naam;

    // Zet hasDonated naar true zodat de naam niet meer veranderd.
    hasDonated = true;

    // Pak donatievalue en zorg er voor dat het een Number wordt.
    var donationAmount = document.getElementsByClassName("donationAmount")[0].querySelector("p").innerHTML;
    var ParsedDonationAmount = parseFloat(donationAmount.split("€")[1]);
    var totaleBedrag = ParsedDonationAmount + bedrag;
    // Update het bedrag
    document.getElementsByClassName("donationAmount")[0].querySelector("p").innerHTML = `€${totaleBedrag},-`;

    var DonationAmountTotal = 0;

    // Pak nieuwe donatievalue
    for (var i = 0; i < 5; i++)
    {
        DonationAmountTotal = DonationAmountTotal + parseFloat(document.getElementsByClassName("donationAmount")[i].querySelector("p").innerHTML.split("€")[1]);
    }

    // Update de goal balk
    a = DonationAmountTotal;
    b = 500 // Dit is het nummer voor de goal
    c = a/b;
    d = c*100;
    if(d > 100) d = 100; // Niet over 100% gaan 

    // Verander de Width van de 2 bar elementen.
    document.getElementById('Progress').style.width = d + "%";
    
    document.getElementById('MainGoal').style.width = 100-d + "%";

    var previousAmount = document.getElementById('Progress').querySelector("p").innerHTML;
    document.getElementById('Progress').querySelector("p").innerHTML = previousAmount + 1;

    

}
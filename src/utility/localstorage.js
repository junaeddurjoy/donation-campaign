const getstoredDonation = () => {
    const storedDonation = localStorage.getItem('all-donations');
    if (storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}
const saveDonation = id => {
    const storedDonation = getstoredDonation();
    const exists = storedDonation.find(donationId => donationId === id );
    if(!exists){
        storedDonation.push(id);
        localStorage.setItem('all-donations',JSON.stringify(storedDonation));
    }
}

export {getstoredDonation, saveDonation}
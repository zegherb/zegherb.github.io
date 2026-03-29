document.getElementById('cvForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let nama = document.getElementById('nama').value;
    let nim  = document.getElementById('nim').value;

    if (nama === '' || nim === '') {
        alert('Data tidak boleh kosong');
        return;
    }

    let table = document.getElementById('dataTable');
    let row = table.insertRow();

    row.insertCell(0).innerText = nama;
    row.insertCell(1).innerText = nim;

    document.getElementById('cvForm').reset();
});

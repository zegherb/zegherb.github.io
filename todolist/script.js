$(document).ready(function() {
    // Array untuk menyimpan data jadwal
    let schedules = [
        { id: 1, date: "2026-03-20", startTime: "10:00", endTime: "11:30", topic: "Machine Learning: Neural Networks" },
        { id: 2, date: "2026-03-22", startTime: "13:30", endTime: "15:00", topic: "Object-Oriented Programming (OOP) Project" },
        { id: 3, date: "2026-03-22", startTime: "15:01", endTime: "15:30", topic: "Pemrograman Berbasis Platform: Belajar Jquery pada Javascript" }
    ];

    // Counter untuk ID unik
    let nextId = 4;

    // Fungsi untuk merender list dari array ke DOM
    function renderSchedules() {
        const $list = $('#schedule-list');
        $list.empty(); // Kosongkan list sebelum render ulang

        schedules.forEach(function(schedule) {
            // Pembuatan elemen yang aman untuk mencegah DOM XSS
            const $li = $('<li>');
            
            const $infoDiv = $('<div>').addClass('schedule-info');
            
            // Format waktu: Tanggal | Waktu Mulai - Waktu Selesai
            const detailsText = `${schedule.date} | ${schedule.startTime} - ${schedule.endTime}`;
            const $detailsSpan = $('<span>')
                .addClass('schedule-details')
                .text(detailsText);
            
            // Penggunaan .text() di sini krusial untuk mencegah DOM XSS
            const $topicSpan = $('<span>')
                .addClass('schedule-topic')
                .text(schedule.topic);

            $infoDiv.append($detailsSpan, $topicSpan);

            const $deleteBtn = $('<button>')
                .addClass('delete-btn')
                .text('Hapus')
                .on('click', function() {
                    deleteSchedule(schedule.id);
                });

            $li.append($infoDiv, $deleteBtn);
            $list.append($li);
        });
    }

    // Fungsi untuk menambah jadwal baru ke array
    function addSchedule(date, startTime, endTime, topic) {
        schedules.push({
            id: nextId++,
            date: date,
            startTime: startTime,
            endTime: endTime,
            topic: topic
        });
        renderSchedules();
    }

    // Fungsi untuk menghapus jadwal dari array berdasarkan ID
    function deleteSchedule(id) {
        schedules = schedules.filter(function(schedule) {
            return schedule.id !== id;
        });
        renderSchedules();
    }

    // Event listener untuk form submit
    $('#schedule-form').on('submit', function(e) {
        e.preventDefault(); // Mencegah reload halaman

        // Ambil value dari input
        const date = $('#date-input').val();
        const startTime = $('#start-time-input').val();
        const endTime = $('#end-time-input').val();
        const topic = $('#topic-input').val();

        // Validasi
        if(date && startTime && endTime && topic.trim() !== '') {
            if (startTime < endTime) {
                addSchedule(date, startTime, endTime, topic);
                this.reset();
                $('#topic-input').focus();
            } else {
                alert("Waktu mulai harus lebih awal dari waktu selesai!");
            }
        }
    });

    // Render awal saat halaman dimuat
    renderSchedules();
});
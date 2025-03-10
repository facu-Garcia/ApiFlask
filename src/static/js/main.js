document.addEventListener('DOMContentLoaded', init);

function init() {
    const ui = setupUI();
    setupEventListeners(ui);
    setupSearch(ui);
    renderChart(ui);
    setupGraphicsToggle(ui); 
}

function setupUI() {
    return {
        addForm: document.getElementById('add-form'),
        editForm: document.getElementById('edit-form'),
        deleteIdInput: document.getElementById('delete-id'),
        overlay: document.querySelector('.overlay'),
        editOverlay: document.getElementById('edit-overlay'),
        deleteOverlay: document.getElementById('delete-overlay'),
        addButton: document.getElementById('add-credit'),
        closeAddButton: document.getElementById('close-add-form'),
        submitAddButton: document.getElementById('add-credit-form'),
        confirmDeleteBtn: document.getElementById('confirm-delete'),
        cancelDeleteBtn: document.getElementById('cancel-delete'),
        closeEditButton: document.getElementById('close-edit-form'),
        editButtons: document.querySelectorAll('.edit-credit'),
        deleteButtons: document.querySelectorAll('.delete-credit'),
        searchInput: document.getElementById('search'),
        tableBody: document.getElementById('credito-table-body'),
        rows: document.querySelectorAll('#credito-table-body tr'),
        graphicsOverlay: document.getElementById('graphics-overlay'),
        showGraphicsButton: document.getElementById('show-graphics'),
        closeGraphicsButton: document.getElementById('close-graphics-overlay'),
    };
}

function setupEventListeners(ui) {
    ui.closeAddButton.addEventListener('click', () => closeModal(ui.overlay));
    ui.closeEditButton.addEventListener('click', () => closeModal(ui.editOverlay));
    ui.cancelDeleteBtn.addEventListener('click', () => closeModal(ui.deleteOverlay));
    ui.addButton.addEventListener('click', () => openModal(ui.overlay));
    ui.submitAddButton.addEventListener('click', (e) => handleAddSubmit(e, ui));
    ui.editButtons.forEach(button => button.addEventListener('click', (e) => handleEditClick(e, ui)));
    ui.editForm.addEventListener('submit', (e) => handleEditSubmit(e, ui));
    ui.deleteButtons.forEach(button => button.addEventListener('click', (e) => handleDeleteClick(e, ui)));
    ui.confirmDeleteBtn.addEventListener('click', () => handleConfirmDelete(ui));
}

function setupSearch(ui) {
    ui.searchInput.addEventListener('input', () => {
        const searchTerm = ui.searchInput.value.toLowerCase();
        ui.rows.forEach(row => {
            const cliente = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
            if (cliente.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

function closeModal(modal) {
    modal.style.display = 'none';
}

function openModal(modal) {
    modal.style.display = 'flex';
}

function validateForm(cliente, monto, tasaInteres, plazo, fechaOtorgamiento) {
    if (!cliente) {
        alert('El nombre del cliente es obligatorio.');
        return false;
    }
    const nombreRegex = /^[A-ZÀ-ÿ\u00f1\u00d1][a-zà-ÿ\u00f1\u00d1\s]+$/;
    if (!nombreRegex.test(cliente)) {
        alert('El nombre del cliente debe comenzar con una letra mayúscula y contener solo letras y espacios.');
        return false;
    }
    if (isNaN(monto) || monto <= 0 || monto > 1000000) {
        alert('El monto debe ser un número positivo menor a 1,000,000.');
        return false;
    }
    if (isNaN(tasaInteres) || tasaInteres <= 0 || tasaInteres > 100) {
        alert('La tasa de interés debe ser un número positivo menor o igual a 100.');
        return false;
    }
    if (isNaN(plazo) || plazo <= 0 || !Number.isInteger(plazo) || plazo > 30) {
        alert('El plazo debe ser un número entero positivo menor o igual a 30 años.');
        return false;
    }
    if (!fechaOtorgamiento) {
        alert('La fecha de otorgamiento es obligatoria.');
        return false;
    }
    const fecha = new Date(fechaOtorgamiento);
    const fechaMinima = new Date(1950, 0, 1);
    const fechaActual = new Date();
    if (fecha < fechaMinima) {
        alert('La fecha de otorgamiento no puede ser anterior al 1 de enero de 1920.');
        return false;
    }
    if (fecha > fechaActual) {
        alert('La fecha de otorgamiento no puede ser posterior a la fecha actual.');
        return false;
    }
    return true;
}


async function handleAddSubmit(e, ui) {
    e.preventDefault();
    const cliente = ui.addForm.cliente.value.trim();
    const monto = parseFloat(ui.addForm.monto.value);
    const tasaInteres = parseFloat(ui.addForm.tasa_interes.value);
    const plazo = parseInt(ui.addForm.plazo.value, 10);
    const fechaOtorgamiento = ui.addForm.fecha_otorgamiento.value;

    if (!validateForm(cliente, monto, tasaInteres, plazo, fechaOtorgamiento)) return;

    try {
        const response = await fetch('/creditos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cliente, monto, tasa_interes: tasaInteres, plazo, fecha_otorgamiento: fechaOtorgamiento })
        });
        if (!response.ok) throw new Error('Error al agregar crédito');
        alert('Crédito agregado con éxito');
        location.reload();
    } catch (error) {
        alert(error.message);
    }
}

async function handleEditClick(e, ui) {
    const id = e.currentTarget.getAttribute('data-id');
    try {
        const response = await fetch(`/creditos/${id}`);
        if (!response.ok) throw new Error('Error al obtener crédito');
        const data = await response.json();
        ui.editForm['edit-id'].value = data.id;
        ui.editForm['edit-cliente'].value = data.cliente;
        ui.editForm['edit-monto'].value = data.monto;
        ui.editForm['edit-tasa_interes'].value = data.tasa_interes;
        ui.editForm['edit-plazo'].value = data.plazo;
        ui.editForm['edit-fecha_otorgamiento'].value = data.fecha_otorgamiento;
        openModal(ui.editOverlay);
    } catch (error) {
        alert(error.message);
    }
}

async function handleEditSubmit(e, ui) {
    e.preventDefault();
    const id = ui.editForm['edit-id'].value;
    const cliente = ui.editForm['edit-cliente'].value.trim();
    const monto = parseFloat(ui.editForm['edit-monto'].value);
    const tasaInteres = parseFloat(ui.editForm['edit-tasa_interes'].value);
    const plazo = parseInt(ui.editForm['edit-plazo'].value, 10);
    const fechaOtorgamiento = ui.editForm['edit-fecha_otorgamiento'].value;

    if (!validateForm(cliente, monto, tasaInteres, plazo, fechaOtorgamiento)) return;

    try {
        const response = await fetch(`/creditos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cliente, monto, tasa_interes: tasaInteres, plazo, fecha_otorgamiento: fechaOtorgamiento })
        });
        if (!response.ok) throw new Error('Error al actualizar el crédito');
        alert('Crédito actualizado con éxito');
        location.reload();
    } catch (error) {
        alert(error.message);
    }
}

function handleDeleteClick(e, ui) {
    ui.deleteIdInput.value = e.currentTarget.getAttribute('data-id');
    openModal(ui.deleteOverlay);
}

async function handleConfirmDelete(ui) {
    const id = ui.deleteIdInput.value;
    try {
        const response = await fetch(`/creditos/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Error al eliminar el crédito');
        alert('Crédito eliminado con éxito');
        location.reload();
    } catch (error) {
        alert(error.message);
    }
}

function setupGraphicsToggle(ui) {
    ui.showGraphicsButton.addEventListener('click', () => {
        ui.graphicsOverlay.style.display = 'flex';
    });

    ui.closeGraphicsButton.addEventListener('click', () => {
        ui.graphicsOverlay.style.display = 'none';
    });
}

function renderChart(ui) {
    const creditos = Array.from(ui.rows).map(row => {
        const monto = parseFloat(row.querySelector('td:nth-child(3)').textContent);
        return monto;
    });

    const rangos = [0, 5000, 10000, 15000, 20000, Infinity];
    const etiquetasRangos = ['0-5000', '5001-10000', '10001-15000', '15001-20000', '20000+'];
    const conteoRangos = Array(rangos.length - 1).fill(0);

    creditos.forEach(monto => {
        for (let i = 0; i < rangos.length - 1; i++) {
            if (monto >= rangos[i] && monto < rangos[i + 1]) {
                conteoRangos[i]++;
                break;
            }
        }
    });

    const ctx = document.getElementById('creditosChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: etiquetasRangos,
            datasets: [{
                label: 'Créditos por Rango de Monto',
                data: conteoRangos,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        precision: 0
                    }
                }
            }
        }
    });
}
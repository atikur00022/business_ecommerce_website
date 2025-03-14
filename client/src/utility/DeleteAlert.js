import Swal from 'sweetalert2';

export const DeleteAlert = async () => {
    return await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        customClass: {
            confirmButton: "custom-confirm-button",
            cancelButton: "custom-cancel-button"
        },
        confirmButtonText: "Yes, delete it!"
    });
};
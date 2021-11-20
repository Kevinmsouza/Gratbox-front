import Swal from "sweetalert2";

function sendAlert({type, title, text}) {
    Swal.fire({
        title: title,
        text: text,
        icon: type,
        confirmButtonColor: '#4d65a8',
      })
}

export {
    sendAlert,
}
function onkeyDown() {

  return;

}

function onkeyUp() {
  
  return;

}

/* ------------------------------------------------------------ */

export function startCapturingInput() {
  window.addEventListener('keydown', onkeyDown);
  window.addEventListener('keyup', onkeyUp);
}

export function stopCapturingInput() {
  window.removeEventListener('keydown', onkeyDown);
  window.removeEventListener('keyup', onkeyUp);
}

/* ------------------------------------------------------------ */
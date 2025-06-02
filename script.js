// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) preloader.style.display = 'none';
});

// Accordions
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const acc = this.parentElement;
    acc.classList.toggle('active');
    document.querySelectorAll('.accordion').forEach(other => {
      if (other !== acc) other.classList.remove('active');
    });
    // Troca o ícone +/-
    document.querySelectorAll('.accordion-btn .accordion-icon').forEach(icon => {
      icon.textContent = '+';
    });
    if (acc.classList.contains('active')) {
      this.querySelector('.accordion-icon').textContent = '-';
    }
  });
});

// Carrossel: direção e pausa ao passar o mouse + duplicação para infinito
document.addEventListener('DOMContentLoaded', function () {
  // Seleciona todos os carrosseis
  var carousels = document.querySelectorAll('.carousel-artists');
  carousels.forEach(function(carousel, idx) {
    // Duplicar os itens para efeito infinito
    var track = carousel.querySelector('.carousel-track');
    if (track && track.children.length > 0) {
      // Só duplica se ainda não duplicado
      if (!track.classList.contains('duplicated')) {
        track.innerHTML += track.innerHTML;
        track.classList.add('duplicated');
      }
    }
    // Primeiro carrossel: esquerda (padrão), segundo: direita
    if (idx === 1) {
      carousel.setAttribute('data-direction', 'right');
    } else {
      carousel.setAttribute('data-direction', 'left');
    }
    // Pausar ao passar mouse
    carousel.addEventListener('mouseenter', function() {
      carousel.setAttribute('data-paused', 'true');
    });
    carousel.addEventListener('mouseleave', function() {
      carousel.setAttribute('data-paused', 'false');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-agendamento');
  const whatsappInput = document.getElementById('whatsapp');

  if (whatsappInput) {
    whatsappInput.addEventListener('input', function () {
      this.value = this.value.replace(/\D/g, '');
    });
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const nome = document.getElementById('nome').value.trim();
      const whatsapp = document.getElementById('whatsapp').value.trim();
      const estilo = document.getElementById('estilo').value.trim();
      const tamanho = document.getElementById('tamanho').value.trim();

      const msg = `Olá! Gostaria de agendar uma tattoo:%0A%0A*Nome:* ${nome}%0A*WhatsApp:* ${whatsapp}%0A*Estilo desejado:* ${estilo}%0A*Tamanho aproximado:* ${tamanho}`;
      const numero = '5551982240241';
      const url = `https://wa.me/${numero}?text=${msg}`;

      window.open(url, '_blank');
    });
  }
});

// Fade-in animation para elementos com a classe .fade-in
function fadeInOnScroll() {
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fadeInOnScroll();
  window.addEventListener('scroll', fadeInOnScroll);
});

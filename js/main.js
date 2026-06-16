(function () {
  const h1 = document.querySelector('.hero-content h1');
  if (!h1) return;

  const chars = h1.textContent.split('');

  // Rebuild h1 as individual letter spans inside a wrapper
  const wrapper = document.createElement('span');
  wrapper.className = 'wave-wrapper';

  const letterSpans = chars.map(char => {
    const span = document.createElement('span');
    span.className = 'wave-letter';
    span.textContent = char === ' ' ? ' ' : char;
    wrapper.appendChild(span);
    return span;
  });

  // Scottish Saltire flag SVG
  const flagSVG = `<svg width="22" height="15" viewBox="0 0 22 15" xmlns="http://www.w3.org/2000/svg">
    <rect width="22" height="15" fill="#003399"/>
    <line x1="0" y1="0" x2="22" y2="15" stroke="white" stroke-width="3.5"/>
    <line x1="22" y1="0" x2="0" y2="15" stroke="white" stroke-width="3.5"/>
  </svg>`;

  const flag = document.createElement('span');
  flag.className = 'wave-flag';
  flag.innerHTML = flagSVG;
  wrapper.appendChild(flag);

  h1.innerHTML = '';
  h1.appendChild(wrapper);

  const LETTER_DELAY = 75;
  const RISE_MS = 140;
  const HOLD_MS = 80;
  const FALL_MS = 140;
  const RISE_PX = 20;
  const REP_PAUSE = 500;
  const TOTAL_REPS = 3;

  function runWave(rep) {
    if (rep >= TOTAL_REPS) {
      flag.style.display = 'none';
      return;
    }

    letterSpans.forEach((span, i) => {
      setTimeout(() => {
        // Move flag under this letter
        const spanRect = span.getBoundingClientRect();
        const wrapRect = wrapper.getBoundingClientRect();
        flag.style.left = (spanRect.left - wrapRect.left + spanRect.width / 2) + 'px';
        flag.style.display = 'block';

        // Rise
        span.style.transition = `transform ${RISE_MS}ms ease-out`;
        span.style.transform = `translateY(-${RISE_PX}px)`;

        setTimeout(() => {
          // Fall
          span.style.transition = `transform ${FALL_MS}ms ease-in`;
          span.style.transform = 'translateY(0)';

          if (i === letterSpans.length - 1) {
            setTimeout(() => {
              flag.style.display = 'none';
              setTimeout(() => runWave(rep + 1), REP_PAUSE);
            }, FALL_MS);
          }
        }, RISE_MS + HOLD_MS);

      }, i * LETTER_DELAY);
    });
  }

  setTimeout(() => runWave(0), 700);
})();

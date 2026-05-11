/* ============================================================
   Gayatri Jyothishalayam — Interactive Background System
   Used by: about.html, contact.html
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Theme ---------- */
  const STORAGE_KEY = 'gj-theme';
  const DEFAULT_THEME = 'dark';

  function getCurrentTheme() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    const canvas = document.getElementById('powder-canvas');
    if (theme === 'light') {
      startPowderTrail();
      if (canvas) canvas.style.opacity = '1';
    } else {
      stopPowderTrail();
      if (canvas) canvas.style.opacity = '0';
    }
  }

  /* ---------- Gayatri Devi SVG ---------- */
  const GAYATRI_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 580" fill="none">
    <defs>
      <radialGradient id="gSkin2" cx="50%" cy="38%" r="62%"><stop offset="0%" stop-color="#E8C4A0"/><stop offset="100%" stop-color="#C8906A"/></radialGradient>
      <linearGradient id="gSaree2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#C85060"/><stop offset="100%" stop-color="#9E3848"/></linearGradient>
      <radialGradient id="gHalo2" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(218,170,55,0.52)"/><stop offset="60%" stop-color="rgba(218,170,55,0.16)"/><stop offset="100%" stop-color="rgba(218,170,55,0)"/></radialGradient>
      <radialGradient id="gPetal2" cx="50%" cy="72%" r="60%"><stop offset="0%" stop-color="#F0B8C0"/><stop offset="100%" stop-color="#D07888"/></radialGradient>
      <linearGradient id="gGold2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#E8C040"/><stop offset="100%" stop-color="#B88A20"/></linearGradient>
    </defs>
    <circle cx="200" cy="265" r="188" stroke="rgba(218,170,55,0.20)" stroke-width="1.5" stroke-dasharray="8 5"/>
    <circle cx="200" cy="265" r="176" stroke="rgba(218,170,55,0.10)" stroke-width="0.7" stroke-dasharray="3 8"/>
    <g fill="rgba(218,170,55,0.07)" stroke="rgba(218,170,55,0.14)" stroke-width="0.8">
      <ellipse cx="200" cy="77" rx="11" ry="21"/><ellipse cx="200" cy="77" rx="11" ry="21" transform="rotate(45 200 265)"/>
      <ellipse cx="200" cy="77" rx="11" ry="21" transform="rotate(90 200 265)"/><ellipse cx="200" cy="77" rx="11" ry="21" transform="rotate(135 200 265)"/>
      <ellipse cx="200" cy="77" rx="11" ry="21" transform="rotate(180 200 265)"/><ellipse cx="200" cy="77" rx="11" ry="21" transform="rotate(225 200 265)"/>
      <ellipse cx="200" cy="77" rx="11" ry="21" transform="rotate(270 200 265)"/><ellipse cx="200" cy="77" rx="11" ry="21" transform="rotate(315 200 265)"/>
    </g>
    <circle cx="200" cy="198" r="70" fill="url(#gHalo2)"/>
    <circle cx="200" cy="198" r="66" stroke="rgba(218,170,55,0.38)" stroke-width="1.5" stroke-dasharray="5 4"/>
    <circle cx="200" cy="198" r="57" stroke="rgba(218,170,55,0.20)" stroke-width="0.8" stroke-dasharray="2 5"/>
    <g stroke="rgba(218,170,55,0.18)" stroke-width="1" stroke-linecap="round">
      <line x1="200" y1="128" x2="200" y2="114"/><line x1="249" y1="149" x2="258" y2="140"/>
      <line x1="270" y1="198" x2="284" y2="198"/><line x1="249" y1="247" x2="258" y2="256"/>
      <line x1="200" y1="268" x2="200" y2="282"/><line x1="151" y1="247" x2="142" y2="256"/>
      <line x1="130" y1="198" x2="116" y2="198"/><line x1="151" y1="149" x2="142" y2="140"/>
    </g>
    <g fill="url(#gPetal2)" stroke="rgba(175,90,100,0.35)" stroke-width="0.8" opacity="0.85">
      <ellipse cx="200" cy="500" rx="19" ry="34" transform="rotate(-90 200 500)"/>
      <ellipse cx="200" cy="500" rx="19" ry="34" transform="rotate(-60 200 500)"/>
      <ellipse cx="200" cy="500" rx="19" ry="34" transform="rotate(-30 200 500)"/>
      <ellipse cx="200" cy="500" rx="19" ry="34" transform="rotate(0 200 500)"/>
      <ellipse cx="200" cy="500" rx="19" ry="34" transform="rotate(30 200 500)"/>
      <ellipse cx="200" cy="500" rx="19" ry="34" transform="rotate(60 200 500)"/>
      <ellipse cx="200" cy="500" rx="19" ry="34" transform="rotate(90 200 500)"/>
      <ellipse cx="200" cy="500" rx="19" ry="34" transform="rotate(120 200 500)"/>
      <ellipse cx="200" cy="500" rx="19" ry="34" transform="rotate(150 200 500)"/>
      <ellipse cx="200" cy="500" rx="19" ry="34" transform="rotate(180 200 500)"/>
      <ellipse cx="200" cy="500" rx="19" ry="34" transform="rotate(210 200 500)"/>
      <ellipse cx="200" cy="500" rx="19" ry="34" transform="rotate(240 200 500)"/>
    </g>
    <ellipse cx="200" cy="500" rx="28" ry="15" fill="rgba(220,168,50,0.68)" stroke="rgba(195,145,35,0.55)" stroke-width="1.2"/>
    <circle cx="200" cy="499" r="3" fill="rgba(195,140,35,0.80)"/>
    <circle cx="192" cy="503" r="2" fill="rgba(195,140,35,0.68)"/><circle cx="208" cy="503" r="2" fill="rgba(195,140,35,0.68)"/>
    <path d="M200 515 Q198 535 200 548" stroke="rgba(95,138,75,0.52)" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M148 478 Q132 396 140 320 Q148 272 200 267 Q252 272 260 320 Q268 396 252 478 Z" fill="url(#gSaree2)" stroke="rgba(165,70,82,0.40)" stroke-width="1.2"/>
    <path d="M150 478 Q134 397 142 320 Q150 274 200 269" stroke="rgba(218,170,55,0.55)" stroke-width="2" fill="none"/>
    <path d="M250 478 Q266 397 258 320 Q250 274 200 269" stroke="rgba(218,170,55,0.55)" stroke-width="2" fill="none"/>
    <path d="M163 360 Q200 368 237 360" stroke="rgba(218,170,55,0.72)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M160 286 Q162 268 200 265 Q238 268 240 286 Q235 302 200 304 Q165 302 160 286 Z" fill="rgba(152,52,65,0.68)" stroke="rgba(165,70,82,0.35)" stroke-width="0.8"/>
    <g fill="none" stroke-linecap="round">
      <path d="M155 285 C128 268 104 253 78 230" stroke="rgba(212,148,98,0.82)" stroke-width="5"/>
      <path d="M149 303 C118 290 93 284 66 282" stroke="rgba(212,148,98,0.80)" stroke-width="5"/>
      <path d="M147 321 C116 323 92 330 66 337" stroke="rgba(212,148,98,0.77)" stroke-width="5"/>
      <path d="M150 339 C124 353 103 370 86 387" stroke="rgba(212,148,98,0.74)" stroke-width="5"/>
      <path d="M157 353 C136 374 122 395 108 415" stroke="rgba(212,148,98,0.72)" stroke-width="5"/>
      <path d="M245 285 C272 268 296 253 322 230" stroke="rgba(212,148,98,0.82)" stroke-width="5"/>
      <path d="M251 303 C282 290 307 284 334 282" stroke="rgba(212,148,98,0.80)" stroke-width="5"/>
      <path d="M253 321 C284 323 308 330 334 337" stroke="rgba(212,148,98,0.77)" stroke-width="5"/>
      <path d="M250 339 C276 353 297 370 314 387" stroke="rgba(212,148,98,0.74)" stroke-width="5"/>
      <path d="M243 353 C264 374 278 395 292 415" stroke="rgba(212,148,98,0.72)" stroke-width="5"/>
    </g>
    <g fill="none" stroke="rgba(218,170,55,0.78)" stroke-width="2">
      <circle cx="80" cy="232" r="5"/><circle cx="66" cy="282" r="5"/><circle cx="68" cy="337" r="5"/>
      <circle cx="86" cy="387" r="5"/><circle cx="110" cy="413" r="5"/>
      <circle cx="320" cy="232" r="5"/><circle cx="334" cy="282" r="5"/><circle cx="332" cy="337" r="5"/>
      <circle cx="314" cy="387" r="5"/><circle cx="290" cy="413" r="5"/>
    </g>
    <circle cx="76" cy="228" r="9" fill="rgba(228,128,138,0.88)" stroke="rgba(190,90,100,0.65)" stroke-width="1"/>
    <path d="M71 228 Q76 220 81 228 Q76 225 71 228 Z" fill="rgba(208,98,112,0.82)"/>
    <path d="M58 273 Q58 266 65 264 Q72 264 74 267 Q76 274 74 283 Q72 289 65 289 Q58 289 58 282 Z" fill="rgba(218,170,55,0.84)" stroke="rgba(185,140,35,0.65)" stroke-width="1"/>
    <rect x="56" y="329" width="20" height="14" rx="2" fill="rgba(230,175,55,0.84)" stroke="rgba(195,140,35,0.65)" stroke-width="1"/>
    <circle cx="84" cy="382" r="3.5" fill="rgba(172,102,112,0.82)"/><circle cx="90" cy="378" r="3" fill="rgba(172,102,112,0.78)"/>
    <circle cx="96" cy="382" r="3" fill="rgba(172,102,112,0.78)"/><circle cx="98" cy="390" r="3.5" fill="rgba(172,102,112,0.82)"/>
    <circle cx="324" cy="228" r="9" fill="rgba(228,128,138,0.88)" stroke="rgba(190,90,100,0.65)" stroke-width="1"/>
    <path d="M319 228 Q324 220 329 228 Q324 225 319 228 Z" fill="rgba(208,98,112,0.82)"/>
    <path d="M324 328 Q328 321 336 323 Q343 328 340 337 Q337 342 329 341 Q321 339 322 333 Z" fill="rgba(244,238,215,0.90)" stroke="rgba(208,192,152,0.65)" stroke-width="1"/>
    <circle cx="314" cy="385" r="10" fill="none" stroke="rgba(218,170,55,0.82)" stroke-width="2"/>
    <circle cx="314" cy="385" r="5" fill="none" stroke="rgba(218,170,55,0.60)" stroke-width="1.5"/>
    <circle cx="314" cy="385" r="2.5" fill="rgba(218,170,55,0.78)"/>
    <g stroke="rgba(218,170,55,0.52)" stroke-width="1"><line x1="314" y1="375" x2="314" y2="395"/><line x1="304" y1="385" x2="324" y2="385"/><line x1="307" y1="378" x2="321" y2="392"/><line x1="321" y1="378" x2="307" y2="392"/></g>
    <path d="M286 408 Q290 397 294 404 Q298 394 296 410 Q293 418 290 418 Q285 416 286 408 Z" fill="rgba(228,128,38,0.82)" stroke="rgba(195,98,22,0.62)" stroke-width="1"/>
    <path d="M179 262 Q200 276 221 262" stroke="rgba(218,170,55,0.88)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <circle cx="200" cy="276" r="5.5" fill="url(#gGold2)" stroke="rgba(182,142,32,0.70)" stroke-width="1"/>
    <circle cx="200" cy="276" r="2.5" fill="rgba(192,52,62,0.88)"/>
    <ellipse cx="200" cy="200" rx="33" ry="38" fill="url(#gSkin2)" stroke="rgba(182,122,72,0.38)" stroke-width="1.2"/>
    <path d="M169 184 Q200 172 231 184 Q220 179 200 178 Q180 179 169 184 Z" fill="rgba(40,20,10,0.72)"/>
    <path d="M182 186 Q191 181 200 184" stroke="rgba(52,28,15,0.90)" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M200 184 Q209 181 218 186" stroke="rgba(52,28,15,0.90)" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M182 194 Q191 188 200 194 Q191 199 182 194 Z" fill="rgba(244,238,225,0.94)"/>
    <path d="M200 194 Q209 188 218 194 Q209 199 200 194 Z" fill="rgba(244,238,225,0.94)"/>
    <circle cx="191" cy="194" r="3.8" fill="rgba(52,32,18,0.92)"/><circle cx="209" cy="194" r="3.8" fill="rgba(52,32,18,0.92)"/>
    <circle cx="192" cy="193" r="1.4" fill="rgba(255,255,255,0.60)"/><circle cx="210" cy="193" r="1.4" fill="rgba(255,255,255,0.60)"/>
    <path d="M181 194 Q191 190 201 194" stroke="rgba(22,8,2,0.75)" stroke-width="1.2" fill="none"/>
    <path d="M199 194 Q209 190 219 194" stroke="rgba(22,8,2,0.75)" stroke-width="1.2" fill="none"/>
    <path d="M182 194 L178 198" stroke="rgba(22,8,2,0.62)" stroke-width="1" fill="none" stroke-linecap="round"/>
    <path d="M218 194 L222 198" stroke="rgba(22,8,2,0.62)" stroke-width="1" fill="none" stroke-linecap="round"/>
    <path d="M196 203 Q200 209 204 203" stroke="rgba(158,102,62,0.55)" stroke-width="1.2" fill="none"/>
    <circle cx="193" cy="205" r="2.5" fill="none" stroke="rgba(218,170,55,0.78)" stroke-width="1"/>
    <path d="M189 214 Q195 209 200 210 Q205 209 211 214 Q207 220 200 220 Q193 220 189 214 Z" fill="rgba(192,78,88,0.90)"/>
    <circle cx="200" cy="181" r="4.2" fill="rgba(192,52,62,0.94)"/>
    <circle cx="200" cy="181" r="1.8" fill="rgba(238,198,48,0.82)"/>
    <circle cx="167" cy="206" r="7" fill="url(#gGold2)" stroke="rgba(182,142,32,0.70)" stroke-width="1.2"/>
    <circle cx="167" cy="206" r="3.2" fill="rgba(192,52,62,0.90)"/>
    <line x1="167" y1="213" x2="167" y2="222" stroke="rgba(218,170,55,0.72)" stroke-width="1.5"/>
    <circle cx="167" cy="224" r="3.2" fill="url(#gGold2)"/>
    <circle cx="233" cy="206" r="7" fill="url(#gGold2)" stroke="rgba(182,142,32,0.70)" stroke-width="1.2"/>
    <circle cx="233" cy="206" r="3.2" fill="rgba(192,52,62,0.90)"/>
    <line x1="233" y1="213" x2="233" y2="222" stroke="rgba(218,170,55,0.72)" stroke-width="1.5"/>
    <circle cx="233" cy="224" r="3.2" fill="url(#gGold2)"/>
    <ellipse cx="162" cy="220" rx="20" ry="25" fill="url(#gSkin2)" stroke="rgba(182,122,72,0.28)" stroke-width="0.9"/>
    <path d="M146 210 Q162 202 178 210 Q170 207 162 206 Q154 207 146 210 Z" fill="rgba(40,20,10,0.62)"/>
    <ellipse cx="157" cy="219" rx="2.8" ry="2.2" fill="rgba(244,238,225,0.90)"/><ellipse cx="167" cy="219" rx="2.8" ry="2.2" fill="rgba(244,238,225,0.90)"/>
    <circle cx="157" cy="219" r="1.8" fill="rgba(52,32,18,0.88)"/><circle cx="167" cy="219" r="1.8" fill="rgba(52,32,18,0.88)"/>
    <circle cx="162" cy="210" r="2.5" fill="rgba(192,52,62,0.82)"/>
    <path d="M157 229 Q162 233 167 229" fill="rgba(192,78,88,0.78)" stroke="none"/>
    <ellipse cx="238" cy="220" rx="20" ry="25" fill="url(#gSkin2)" stroke="rgba(182,122,72,0.28)" stroke-width="0.9"/>
    <path d="M222 210 Q238 202 254 210 Q246 207 238 206 Q230 207 222 210 Z" fill="rgba(40,20,10,0.62)"/>
    <ellipse cx="233" cy="219" rx="2.8" ry="2.2" fill="rgba(244,238,225,0.90)"/><ellipse cx="243" cy="219" rx="2.8" ry="2.2" fill="rgba(244,238,225,0.90)"/>
    <circle cx="233" cy="219" r="1.8" fill="rgba(52,32,18,0.88)"/><circle cx="243" cy="219" r="1.8" fill="rgba(52,32,18,0.88)"/>
    <circle cx="238" cy="210" r="2.5" fill="rgba(192,52,62,0.82)"/>
    <path d="M233 229 Q238 233 243 229" fill="rgba(192,78,88,0.78)" stroke="none"/>
    <ellipse cx="132" cy="237" rx="15" ry="19" fill="url(#gSkin2)" stroke="rgba(182,122,72,0.22)" stroke-width="0.7"/>
    <path d="M120 228 Q132 221 144 228 Q138 225 132 224 Q126 225 120 228 Z" fill="rgba(40,20,10,0.52)"/>
    <ellipse cx="127" cy="235" rx="2.2" ry="1.8" fill="rgba(244,238,225,0.85)"/><ellipse cx="137" cy="235" rx="2.2" ry="1.8" fill="rgba(244,238,225,0.85)"/>
    <circle cx="127" cy="235" r="1.5" fill="rgba(52,32,18,0.82)"/><circle cx="137" cy="235" r="1.5" fill="rgba(52,32,18,0.82)"/>
    <circle cx="132" cy="225" r="2" fill="rgba(192,52,62,0.72)"/>
    <ellipse cx="268" cy="237" rx="15" ry="19" fill="url(#gSkin2)" stroke="rgba(182,122,72,0.22)" stroke-width="0.7"/>
    <path d="M256 228 Q268 221 280 228 Q274 225 268 224 Q262 225 256 228 Z" fill="rgba(40,20,10,0.52)"/>
    <ellipse cx="263" cy="235" rx="2.2" ry="1.8" fill="rgba(244,238,225,0.85)"/><ellipse cx="273" cy="235" rx="2.2" ry="1.8" fill="rgba(244,238,225,0.85)"/>
    <circle cx="263" cy="235" r="1.5" fill="rgba(52,32,18,0.82)"/><circle cx="273" cy="235" r="1.5" fill="rgba(52,32,18,0.82)"/>
    <circle cx="268" cy="225" r="2" fill="rgba(192,52,62,0.72)"/>
    <path d="M168 164 Q200 157 232 164 Q228 160 200 158 Q172 160 168 164 Z" fill="rgba(218,170,55,0.82)" stroke="rgba(185,142,32,0.65)" stroke-width="0.5"/>
    <path d="M168 164 Q184 140 200 134 Q216 140 232 164" stroke="rgba(218,170,55,0.82)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M174 160 Q190 144 200 140 Q210 144 226 160" stroke="rgba(218,170,55,0.52)" stroke-width="1.2" fill="none" stroke-dasharray="3 3"/>
    <ellipse cx="200" cy="128" rx="9" ry="11" fill="url(#gGold2)" stroke="rgba(182,142,32,0.72)" stroke-width="1"/>
    <circle cx="200" cy="120" r="4.2" fill="url(#gGold2)" stroke="rgba(182,142,32,0.62)" stroke-width="0.8"/>
    <circle cx="200" cy="117" r="2.2" fill="rgba(192,52,62,0.92)"/>
    <circle cx="178" cy="146" r="5.5" fill="url(#gGold2)" stroke="rgba(182,142,32,0.65)" stroke-width="1"/>
    <circle cx="178" cy="146" r="2.5" fill="rgba(192,52,62,0.88)"/>
    <circle cx="222" cy="146" r="5.5" fill="url(#gGold2)" stroke="rgba(182,142,32,0.65)" stroke-width="1"/>
    <circle cx="222" cy="146" r="2.5" fill="rgba(192,52,62,0.88)"/>
    <path d="M164 162 L157 149 L170 157 Z" fill="rgba(218,170,55,0.78)"/>
    <path d="M236 162 L243 149 L230 157 Z" fill="rgba(218,170,55,0.78)"/>
    <path d="M172 170 Q200 165 228 170" stroke="rgba(218,170,55,0.72)" stroke-width="1.8" fill="none"/>
    <circle cx="162" cy="196" r="2.5" fill="url(#gGold2)"/><circle cx="238" cy="196" r="2.5" fill="url(#gGold2)"/>
    <path d="M155 552 Q200 538 245 552 Q230 566 200 570 Q170 566 155 552 Z" fill="rgba(244,241,230,0.75)" stroke="rgba(208,192,158,0.55)" stroke-width="1"/>
    <path d="M210 541 Q218 523 222 509 Q226 495 220 485" stroke="rgba(244,241,230,0.78)" stroke-width="7" stroke-linecap="round" fill="none"/>
    <circle cx="218" cy="481" r="11" fill="rgba(244,241,230,0.80)" stroke="rgba(208,192,158,0.55)" stroke-width="1"/>
    <path d="M226 478 Q238 477 236 482 Q228 485 222 481 Z" fill="rgba(218,170,55,0.84)" stroke="rgba(182,142,32,0.62)" stroke-width="0.8"/>
    <circle cx="221" cy="478" r="2.5" fill="rgba(32,15,5,0.88)"/>
    <circle cx="222" cy="477" r="1" fill="rgba(255,255,255,0.62)"/>
    <path d="M160 551 Q178 537 215 541 Q188 549 166 558 Z" fill="rgba(238,236,222,0.58)" stroke="rgba(208,192,158,0.38)" stroke-width="0.8"/>
    <path d="M240 559 Q250 549 256 556 Q248 564 240 563 Z" fill="rgba(238,236,222,0.62)" stroke="rgba(208,192,158,0.38)" stroke-width="0.8"/>
  </svg>`;

  /* ---------- Inject elements ---------- */
  function injectElements() {
    // Gayatri Devi overlay
    if (!document.querySelector('.gayatri-bg-wrap')) {
      const wrap = document.createElement('div');
      wrap.className = 'gayatri-bg-wrap';
      wrap.innerHTML = GAYATRI_SVG;
      document.body.appendChild(wrap);
    }

    // Powder canvas
    if (!document.getElementById('powder-canvas')) {
      const canvas = document.createElement('canvas');
      canvas.id = 'powder-canvas';
      document.body.appendChild(canvas);
      resizeCanvas(canvas);
      window.addEventListener('resize', () => resizeCanvas(canvas));
    }

    // Floating toggle button
    if (!document.querySelector('.theme-toggle-float')) {
      const btn = document.createElement('button');
      btn.className = 'theme-toggle-float';
      btn.setAttribute('aria-label', 'Toggle light/dark mode');
      btn.innerHTML = '<span class="t-moon">☽</span><span class="t-sun">☀</span>';
      btn.addEventListener('click', () => {
        const next = getCurrentTheme() === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      });
      document.body.appendChild(btn);
    }
  }

  /* ---------- Powder trail ---------- */
  let particles = [];
  let rafId = null;
  let trailActive = false;
  const POWDER_COLORS = ['#FFD700', '#FFA500', '#FF4400', '#CC2200'];

  function resizeCanvas(canvas) {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function spawnParticles(x, y) {
    for (let i = 0; i < 4; i++) {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * -2 - 0.5,
        r:  2 + Math.random() * 2,
        alpha: 0.85,
        color: POWDER_COLORS[Math.floor(Math.random() * POWDER_COLORS.length)]
      });
    }
    if (particles.length > 300) particles.splice(0, particles.length - 300);
  }

  function drawFrame() {
    const canvas = document.getElementById('powder-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles = particles.filter(p => p.alpha > 0);
    for (const p of particles) {
      p.vy   += 0.12;
      p.x    += p.vx;
      p.y    += p.vy;
      p.alpha -= 0.022;
      if (p.alpha <= 0) continue;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    if (trailActive) rafId = requestAnimationFrame(drawFrame);
  }

  function onMouseMove(e) {
    if (getCurrentTheme() === 'light') spawnParticles(e.clientX, e.clientY);
  }

  function startPowderTrail() {
    if (trailActive) return;
    trailActive = true;
    document.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(drawFrame);
  }

  function stopPowderTrail() {
    trailActive = false;
    document.removeEventListener('mousemove', onMouseMove);
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    const canvas = document.getElementById('powder-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    particles = [];
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    injectElements();
    const theme = getCurrentTheme();
    applyTheme(theme);
  });

})();

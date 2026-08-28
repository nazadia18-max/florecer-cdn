/* Método Florecer — bloque de checkout
   Uso: <div id="mf-checkout"></div><script src=".../mf-checkout.js" defer></script>
   ANTES DE SUBIR: reemplazá las 4 URLs de IMGS por las de tus imágenes. */
(function () {
  if (document.getElementById('mf-co-style')) return;

  /* ── 1. IMÁGENES DEL CARRUSEL — poné acá tus 4 URLs ───────────────── */
  var IMGS = [
    { src: 'https://nazadia18-max.github.io/florecer-cdn/antes-21-dias.jpg',  alt: '21 días',          cap: 'Después de 21 días' },
    { src: 'https://nazadia18-max.github.io/florecer-cdn/antes-1-mes.jpg',    alt: '1 mes',            cap: 'Después de 1 mes'   },
    { src: 'https://nazadia18-max.github.io/florecer-cdn/frontal.jpg',        alt: 'Antes y después',  cap: 'Resultado frontal'  },
    { src: 'https://nazadia18-max.github.io/florecer-cdn/lateral.jpg',        alt: 'Frontal',          cap: 'Vista lateral'      }
  ];

  /* ── 2. LINKS DE CHECKOUT ─────────────────────────────────────────── */
  var L30 = 'https://metodo-florecer-plan-30-dias.impultienda.ar/checkout/metodo-florecer-personalizado-30-dias';
  var L60 = 'https://metodo-florecer-plan-30-dias.impultienda.ar/checkout/metodo-florecer-personalizado-60-dias';
  var L90 = 'https://metodo-florecer-plan-30-dias.impultienda.ar/checkout/metodo-florecer-personalizado-90-dias';

  /* ── 3. ESTILOS ───────────────────────────────────────────────────── */
  var css = `
.mf-co-wrap{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;padding:8px 4px 24px;max-width:100%;color:#1C1C1E}
@keyframes mfCoIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
@keyframes mfCoPulse{0%,100%{box-shadow:0 0 0 0 rgba(232,96,122,.35)}50%{box-shadow:0 0 0 8px rgba(232,96,122,0)}}
@keyframes mfTimerTick{0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)}}
@keyframes mfUrgencyGlow{0%,100%{box-shadow:0 4px 20px rgba(180,30,30,.25)}50%{box-shadow:0 4px 32px rgba(220,50,50,.4)}}
.mf-co-hero{text-align:center;padding:18px 4px 16px;animation:mfCoIn .5s cubic-bezier(.22,1,.36,1) .05s both}
.mf-co-hero-chip{display:inline-flex;align-items:center;gap:6px;background:#FEF0F2;border:1.5px solid rgba(232,96,122,.25);border-radius:99px;padding:6px 16px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#E8607A;margin-bottom:14px;animation:mfCoPulse 2.5s ease infinite 1s}
.mf-co-hero-title{font-size:26px;font-weight:800;color:#1C1C1E;line-height:1.2;letter-spacing:-.02em;margin-bottom:10px}
.mf-co-hero-title em{font-style:italic;color:#E8607A}
.mf-co-hero-sub{font-size:14px;color:#6B6B6B;line-height:1.6}
.mf-co-hero-sub strong{color:#1C1C1E}
.mf-co-timer-wrap{background:linear-gradient(135deg,#1a0508 0%,#2d0810 100%);border-radius:18px;padding:16px 18px;margin:16px 0 22px;animation:mfCoIn .5s cubic-bezier(.22,1,.36,1) .1s both,mfUrgencyGlow 3s ease infinite 2s;border:1px solid rgba(220,53,69,.3);position:relative;overflow:hidden}
.mf-co-timer-wrap::before{content:'';position:absolute;top:-40px;right:-40px;width:130px;height:130px;background:radial-gradient(circle,rgba(220,53,69,.15) 0%,transparent 70%);pointer-events:none}
.mf-co-timer-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:12px;text-align:center}
.mf-co-timer-label em{color:#ff8090;font-style:normal}
.mf-co-timer-display{display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:12px}
.mf-co-timer-unit{display:flex;flex-direction:column;align-items:center;gap:4px}
.mf-co-timer-num{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:8px 14px;font-size:36px;font-weight:900;color:#fff;letter-spacing:.01em;min-width:68px;text-align:center;font-variant-numeric:tabular-nums}
.mf-co-timer-num.changing{animation:mfTimerTick .15s ease}
.mf-co-timer-unit-label{font-size:10px;font-weight:600;color:rgba(255,255,255,.35);letter-spacing:.1em;text-transform:uppercase}
.mf-co-timer-colon{font-size:30px;font-weight:900;color:rgba(255,255,255,.25);margin-bottom:14px;line-height:1}
.mf-co-timer-bar-wrap{background:rgba(255,255,255,.08);border-radius:99px;height:4px;overflow:hidden}
.mf-co-timer-bar{height:100%;border-radius:99px;background:linear-gradient(90deg,#ff6b7a,#E8607A);transition:width 1s linear}
.mf-co-timer-foot{text-align:center;font-size:12px;color:rgba(255,255,255,.45);margin-top:10px;line-height:1.5}
.mf-co-timer-foot strong{color:rgba(255,255,255,.8)}
.mf-co-sec-title{font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#BBB;text-align:center;margin:0 0 14px}
.mf-co-options{display:flex;flex-direction:column;gap:10px;margin-bottom:22px;animation:mfCoIn .5s cubic-bezier(.22,1,.36,1) .12s both}
.mf-co-opt{border-radius:16px;padding:16px 18px}
.mf-co-opt-bad{background:#FFF5F5;border:1px solid rgba(220,50,50,.12)}
.mf-co-opt-good{background:#FEF0F2;border:1px solid rgba(232,96,122,.2)}
.mf-co-opt-header{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:700;color:#1C1C1E;margin-bottom:10px}
.mf-co-opt-item{display:flex;align-items:flex-start;gap:8px;font-size:13px;line-height:1.5;margin-bottom:6px}
.mf-co-opt-item:last-child{margin-bottom:0}
.mf-co-opt-bad .mf-co-opt-item{color:#777}
.mf-co-opt-good .mf-co-opt-item{color:#444}
.mf-co-carousel-wrap{margin-bottom:26px;animation:mfCoIn .5s cubic-bezier(.22,1,.36,1) .14s both;display:flex;flex-direction:column;align-items:center}
.mf-co-carousel{position:relative;overflow:hidden;border-radius:18px;background:#FEF0F2;aspect-ratio:4/3;width:100%}
.mf-co-carousel-track{display:flex;width:400%;height:100%;transition:transform .45s cubic-bezier(.22,1,.36,1)}
.mf-co-carousel-slide{width:25%;height:100%;flex-shrink:0;display:flex;align-items:center;justify-content:center}
.mf-co-carousel-slide img{width:100%;height:100%;object-fit:contain;object-position:center;display:block}
.mf-co-carousel-btn{position:absolute;top:50%;transform:translateY(-50%);width:34px;height:34px;background:rgba(255,255,255,.85);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:14px;z-index:10;padding:0;box-shadow:0 2px 8px rgba(0,0,0,.2);color:#1C1C1E}
.mf-co-carousel-btn.prev{left:10px}
.mf-co-carousel-btn.next{right:10px}
.mf-co-carousel-btn:active{transform:translateY(-50%) scale(.95)}
.mf-co-carousel-dots{display:flex;justify-content:center;gap:7px;margin-top:12px}
.mf-co-cdot{width:7px;height:7px;border-radius:50%;background:rgba(232,96,122,.25);cursor:pointer;transition:all .2s ease}
.mf-co-cdot.active{background:#E8607A;width:20px;border-radius:4px}
.mf-co-carousel-caption{text-align:center;font-size:12px;color:#9B9B9B;margin-top:8px;min-height:18px}
.mf-co-plans{display:flex;flex-direction:column;gap:16px;margin-bottom:20px}
.mf-co-plan{border-radius:22px;padding:20px 18px;border:2px solid rgba(232,96,122,.12);background:#fff;position:relative;overflow:hidden;animation:mfCoIn .5s cubic-bezier(.22,1,.36,1) both}
.mf-co-plan:nth-child(1){animation-delay:.1s}
.mf-co-plan:nth-child(2){animation-delay:.18s}
.mf-co-plan:nth-child(3){animation-delay:.26s}
.mf-co-plan.mf-feat{background:linear-gradient(135deg,#1C1C1E 0%,#2A2A2E 100%);border-color:#E8607A;box-shadow:0 12px 40px rgba(232,96,122,.28)}
.mf-co-plan.mf-feat::before{content:'';position:absolute;top:-30px;right:-30px;width:110px;height:110px;background:radial-gradient(circle,rgba(232,96,122,.18) 0%,transparent 70%);pointer-events:none}
.mf-co-best{display:inline-flex;align-items:center;gap:4px;background:#E8607A;color:#fff;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 10px;border-radius:99px;margin-bottom:10px;box-shadow:0 3px 10px rgba(232,96,122,.4)}
.mf-co-plan-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}
.mf-co-plan-name{font-size:20px;font-weight:800;color:#1C1C1E;letter-spacing:-.01em}
.mf-co-plan.mf-feat .mf-co-plan-name{color:#fff}
.mf-co-off{background:linear-gradient(135deg,#E8607A,#d44d68);color:#fff;font-size:12px;font-weight:800;padding:4px 10px;border-radius:99px;letter-spacing:.04em}
.mf-co-dur{font-size:13px;color:#888;margin-bottom:16px;font-weight:500}
.mf-co-plan.mf-feat .mf-co-dur{color:rgba(255,255,255,.5)}
.mf-co-value-stack{background:rgba(232,96,122,.05);border:1px solid rgba(232,96,122,.12);border-radius:14px;padding:12px 14px 10px;margin-bottom:12px}
.mf-co-plan.mf-feat .mf-co-value-stack{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.1)}
.mf-co-vs-label{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#BBB;margin-bottom:10px}
.mf-co-plan.mf-feat .mf-co-vs-label{color:rgba(255,255,255,.3)}
.mf-co-vitem{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;padding:6px 0;border-bottom:1px solid rgba(0,0,0,.04)}
.mf-co-vitem:last-child{border-bottom:none;padding-bottom:0}
.mf-co-plan.mf-feat .mf-co-vitem{border-bottom-color:rgba(255,255,255,.06)}
.mf-co-vitem-left{display:flex;align-items:flex-start;gap:7px;flex:1}
.mf-co-vitem-icon{font-size:13px;flex-shrink:0;margin-top:1px}
.mf-co-vitem-text{font-size:12.5px;line-height:1.45;color:#444;font-weight:500}
.mf-co-plan.mf-feat .mf-co-vitem-text{color:rgba(255,255,255,.8)}
.mf-co-vitem-val{font-size:11.5px;font-weight:700;color:#BBB;text-decoration:line-through;white-space:nowrap;flex-shrink:0;margin-top:2px}
.mf-co-plan.mf-feat .mf-co-vitem-val{color:rgba(255,255,255,.28)}
.mf-co-val-total{display:flex;align-items:center;justify-content:space-between;padding:9px 14px;background:rgba(232,96,122,.06);border:1px solid rgba(232,96,122,.14);border-radius:10px;margin-bottom:14px}
.mf-co-plan.mf-feat .mf-co-val-total{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.1)}
.mf-co-val-total-label{font-size:12px;font-weight:700;color:#888}
.mf-co-plan.mf-feat .mf-co-val-total-label{color:rgba(255,255,255,.4)}
.mf-co-val-total-num{font-size:13px;font-weight:800;color:#BBB;text-decoration:line-through}
.mf-co-plan.mf-feat .mf-co-val-total-num{color:rgba(255,255,255,.28)}
.mf-co-sep{height:1px;background:rgba(232,96,122,.1);margin:14px 0}
.mf-co-plan.mf-feat .mf-co-sep{background:rgba(255,255,255,.08)}
.mf-co-price-block{display:flex;align-items:baseline;flex-wrap:wrap;gap:8px;margin-bottom:14px}
.mf-co-price-today{font-size:11px;font-weight:700;color:#E8607A;letter-spacing:.06em;text-transform:uppercase;width:100%;margin-bottom:-4px}
.mf-co-plan.mf-feat .mf-co-price-today{color:#F4A0B0}
.mf-co-price-row{display:flex;align-items:baseline;gap:3px}
.mf-co-price-sym{font-size:18px;font-weight:800;color:#E8607A}
.mf-co-price-num{font-size:38px;font-weight:900;color:#1C1C1E;letter-spacing:-.03em;line-height:1}
.mf-co-price-ars{font-size:13px;font-weight:700;color:#888;margin-left:4px}
.mf-co-plan.mf-feat .mf-co-price-sym{color:rgba(255,255,255,.4)}
.mf-co-plan.mf-feat .mf-co-price-num{color:#fff}
.mf-co-plan.mf-feat .mf-co-price-ars{color:rgba(255,255,255,.4)}
.mf-co-cta{display:block;text-align:center;text-decoration:none;padding:15px 20px;border-radius:14px;font-size:15px;font-weight:800;letter-spacing:.01em;background:linear-gradient(135deg,#E8607A,#d44d68);color:#fff;box-shadow:0 4px 16px rgba(232,96,122,.35);transition:all .2s ease}
.mf-co-cta:active{transform:scale(.98)}
.mf-co-plan.mf-feat .mf-co-cta{box-shadow:0 6px 24px rgba(232,96,122,.5);animation:mfCoPulse 2.5s ease infinite 2s}
.mf-co-plan-urgency{text-align:center;font-size:11px;color:#999;margin-top:8px;font-weight:500}
.mf-co-plan.mf-feat .mf-co-plan-urgency{color:rgba(255,255,255,.38)}
.mf-co-plan-urgency em{color:#E8607A;font-style:normal;font-weight:700}
.mf-co-plan.mf-feat .mf-co-plan-urgency em{color:#F4A0B0}
.mf-co-testi-pre{background:linear-gradient(135deg,#1C1C1E,#2A2A2E);border-radius:18px;padding:18px 18px 16px;margin-bottom:20px;animation:mfCoIn .5s cubic-bezier(.22,1,.36,1) .15s both;border:1px solid rgba(232,96,122,.2);position:relative;overflow:hidden}
.mf-co-testi-pre::before{content:'';position:absolute;top:-30px;right:-30px;width:100px;height:100px;background:radial-gradient(circle,rgba(232,96,122,.12) 0%,transparent 70%);pointer-events:none}
.mf-co-testi-pre-top{display:flex;align-items:center;gap:10px;margin-bottom:12px}
.mf-co-testi-pre-avatar{width:44px;height:44px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#E8607A,#d44d68);display:flex;align-items:center;justify-content:center;font-size:20px}
.mf-co-testi-pre-name{font-size:14px;font-weight:700;color:#fff}
.mf-co-testi-pre-meta{font-size:12px;color:rgba(255,255,255,.45);margin-top:2px}
.mf-co-testi-pre-stars{font-size:13px;color:#F4A0B0;margin-top:2px}
.mf-co-testi-pre-quote{font-size:14px;line-height:1.65;color:rgba(255,255,255,.8);font-style:italic}
.mf-co-testi-pre-quote strong{color:#F4A0B0;font-style:normal;font-weight:700}
.mf-co-testi-pre-plan{display:inline-flex;align-items:center;gap:5px;background:rgba(232,96,122,.15);border:1px solid rgba(232,96,122,.25);border-radius:99px;padding:4px 10px;font-size:11px;font-weight:700;color:#F4A0B0;margin-top:12px}
.mf-co-price-daily{font-size:12px;font-weight:600;color:#E8607A;margin-top:-8px;margin-bottom:14px;padding:6px 12px;background:rgba(232,96,122,.06);border-radius:8px;display:inline-block}
.mf-co-plan.mf-feat .mf-co-price-daily{color:#F4A0B0;background:rgba(255,255,255,.07)}
.mf-co-full-note{display:flex;align-items:flex-start;gap:8px;background:rgba(232,96,122,.07);border:1px solid rgba(232,96,122,.15);border-radius:10px;padding:10px 12px;margin-bottom:14px;font-size:12.5px;color:#555;line-height:1.5}
.mf-co-full-note strong{color:#E8607A}
.mf-co-guarantee{display:flex;align-items:center;gap:14px;background:#FEF0F2;border-radius:18px;padding:16px 18px;margin-bottom:24px;animation:mfCoIn .5s cubic-bezier(.22,1,.36,1) .3s both;border:1px solid rgba(232,96,122,.15)}
.mf-co-g-badge{flex-shrink:0;width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#E8607A,#d44d68);display:flex;flex-direction:column;align-items:center;justify-content:center}
.mf-co-g-days{font-size:18px;font-weight:900;color:#fff;line-height:1}
.mf-co-g-label{font-size:9px;font-weight:700;color:rgba(255,255,255,.8);letter-spacing:.06em;text-transform:uppercase}
.mf-co-g-title{font-size:14px;font-weight:800;color:#1C1C1E;margin-bottom:4px}
.mf-co-g-desc{font-size:12px;color:#6B6B6B;line-height:1.5}
.mf-co-faq{display:flex;flex-direction:column;gap:6px;margin-bottom:24px;animation:mfCoIn .5s cubic-bezier(.22,1,.36,1) .32s both}
.mf-co-faq-item{border-radius:12px;overflow:hidden;border:1px solid rgba(232,96,122,.1);background:#fff}
.mf-co-faq-q{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 16px;font-size:14px;font-weight:600;color:#1C1C1E;cursor:pointer;user-select:none}
.mf-co-faq-icon{width:22px;height:22px;border-radius:50%;background:#FEF0F2;color:#E8607A;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;flex-shrink:0;transition:all .2s ease}
.mf-co-faq-item.open .mf-co-faq-icon{transform:rotate(45deg);background:#E8607A;color:#fff}
.mf-co-faq-a{max-height:0;overflow:hidden;transition:max-height .35s ease,padding .2s ease;font-size:13px;color:#555;line-height:1.6;padding:0 16px}
.mf-co-faq-item.open .mf-co-faq-a{max-height:400px;padding:0 16px 14px}
.mf-co-seals{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;animation:mfCoIn .5s cubic-bezier(.22,1,.36,1) .34s both}
.mf-co-seal{background:#FEF0F2;border:1px solid rgba(232,96,122,.15);border-radius:99px;padding:6px 14px;font-size:12px;font-weight:600;color:#555}`;

  /* ── 4. CONTENIDO ─────────────────────────────────────────────────── */
  var FAQ = [
    ['¿Qué incluye exactamente el programa?', 'El Método Florecer incluye videos de rutina diaria organizados por zona facial (papada, mandíbula, pómulos, párpados, cuello) y PDFs con tu plan personalizado semana a semana. El plan Intermedio suma 3 recetarios de reducción de grasa y una guía completa de nutrición facial y skin care. El plan Full incluye todo lo anterior más acceso total a todo el contenido existente y futuro de Laura Fazio, de por vida.'],
    ['¿En cuánto tiempo voy a ver resultados?', 'El 89% de nuestras alumnas nota cambios visibles antes de completar las primeras 4 semanas. Con 10 minutos diarios el músculo empieza a responder desde la primera semana.'],
    ['¿Funciona para cualquier edad?', 'Sí. Los músculos faciales responden al estímulo correcto a cualquier edad. Tenemos alumnas de 35 a 70 años con resultados visibles. Nunca es tarde.'],
    ['¿Necesito productos, cremas o equipamiento?', 'No. Solo tus manos, 10 minutos y el método. Desde tu casa, cuando quieras.'],
    ['¿En qué se diferencia del yoga facial de YouTube?', 'Los ejercicios sueltos de YouTube no tienen progresión ni secuencia. El Método Florecer es un sistema estructurado semana a semana donde cada ejercicio prepara el músculo para el siguiente. Esa diferencia es la que produce resultados acumulables y visibles.'],
    ['Ya probé muchas cosas y ninguna me funcionó.', 'Lo que probaste antes probablemente actuó sobre la piel — cremas, hidratantes, tratamientos superficiales. El Método Florecer trabaja el músculo, que es lo que sostiene y da forma al rostro. No fue tu culpa que no funcionara. Fue el método que usaste.'],
    ['¿Cuándo y cómo accedo después de comprar?', 'El acceso es inmediato. Apenas confirmás tu pago recibís un email con tu usuario y contraseña. Podés acceder desde cualquier dispositivo, cuando quieras.'],
    ['¿Qué pasa si no es para mí?', 'Tenés 30 días de garantía total. Si por cualquier motivo no estás satisfecha, te devolvemos el 100% de tu inversión. Sin vueltas.']
  ];

  function vitem(icon, text, val) {
    return '<div class="mf-co-vitem"><div class="mf-co-vitem-left"><span class="mf-co-vitem-icon">' + icon +
      '</span><span class="mf-co-vitem-text">' + text + '</span></div><span class="mf-co-vitem-val">' + val + '</span></div>';
  }

  var html = `
<div class="mf-co-hero">
  <div class="mf-co-hero-chip">🌸 Resultado personalizado listo</div>
  <div class="mf-co-hero-title">Tu plan de yoga facial<br><em>está esperándote</em></div>
  <div class="mf-co-hero-sub">Basado en tus respuestas, Laura armó una rutina <strong>específica para vos</strong>.<br>Disponible solo durante esta oferta.</div>
</div>

<div class="mf-co-sec-title">La diferencia es el método</div>
<div class="mf-co-options">
  <div class="mf-co-opt mf-co-opt-bad">
    <div class="mf-co-opt-header">❌ Sin el método correcto</div>
    <div class="mf-co-opt-item"><span>⚠️</span><span>Cremas que solo hidratan la superficie — la piel sigue sin tono</span></div>
    <div class="mf-co-opt-item"><span>⚠️</span><span>Ejercicios sueltos de YouTube sin progresión ni secuencia</span></div>
    <div class="mf-co-opt-item"><span>⚠️</span><span>Meses de frustración gastando en lo que no funciona</span></div>
  </div>
  <div class="mf-co-opt mf-co-opt-good">
    <div class="mf-co-opt-header">✅ Con el Método Florecer</div>
    <div class="mf-co-opt-item"><span>🌸</span><span>57 músculos activados con secuencia progresiva — resultados acumulables</span></div>
    <div class="mf-co-opt-item"><span>🌸</span><span>10 minutos por día desde tu casa — sin productos ni aparatos</span></div>
    <div class="mf-co-opt-item"><span>🌸</span><span>Plan personalizado por zona — no una rutina genérica para todas</span></div>
  </div>
</div>

<div class="mf-co-carousel-wrap">
  <div class="mf-co-sec-title">Resultados reales de alumnas</div>
  <div class="mf-co-carousel">
    <div class="mf-co-carousel-track" id="mfTrack">` +
      IMGS.map(function (i) {
        return '<div class="mf-co-carousel-slide"><img src="' + i.src + '" alt="' + i.alt + '" loading="lazy"></div>';
      }).join('') + `
    </div>
    <button class="mf-co-carousel-btn prev" data-mf-move="-1">&#8592;</button>
    <button class="mf-co-carousel-btn next" data-mf-move="1">&#8594;</button>
  </div>
  <div class="mf-co-carousel-dots" id="mfDots">` +
    IMGS.map(function (_, i) {
      return '<div class="mf-co-cdot' + (i === 0 ? ' active' : '') + '" data-mf-go="' + i + '"></div>';
    }).join('') + `
  </div>
  <div class="mf-co-carousel-caption" id="mfCaption">${IMGS[0].cap}</div>
</div>

<div class="mf-co-timer-wrap">
  <div class="mf-co-timer-label">⏰ Esta oferta especial expira <em>en:</em></div>
  <div class="mf-co-timer-display">
    <div class="mf-co-timer-unit"><div class="mf-co-timer-num" id="mfTimerHrs">00</div><div class="mf-co-timer-unit-label">horas</div></div>
    <div class="mf-co-timer-colon">:</div>
    <div class="mf-co-timer-unit"><div class="mf-co-timer-num" id="mfTimerMin">59</div><div class="mf-co-timer-unit-label">minutos</div></div>
    <div class="mf-co-timer-colon">:</div>
    <div class="mf-co-timer-unit"><div class="mf-co-timer-num" id="mfTimerSec">59</div><div class="mf-co-timer-unit-label">segundos</div></div>
  </div>
  <div class="mf-co-timer-bar-wrap"><div class="mf-co-timer-bar" id="mfTimerBar" style="width:100%"></div></div>
  <div class="mf-co-timer-foot">Cuando el timer llegue a cero, <strong>los precios vuelven a su valor original.</strong></div>
</div>

<div class="mf-co-testi-pre">
  <div class="mf-co-testi-pre-top">
    <div class="mf-co-testi-pre-avatar">👩</div>
    <div>
      <div class="mf-co-testi-pre-name">Marcela R.</div>
      <div class="mf-co-testi-pre-meta">Buenos Aires · Plan Intermedio</div>
      <div class="mf-co-testi-pre-stars">★★★★★</div>
    </div>
  </div>
  <div class="mf-co-testi-pre-quote">"Estuve años comprando cremas carísimas y nada. Vi el precio y pensé que era una tontería más. Al mes no podía creer lo que veía en el espejo. <strong>Fue lo único que realmente cambió mi cara.</strong> Literalmente. Si estás dudando, no dudes."</div>
  <div class="mf-co-testi-pre-plan">✓ Compró el plan Intermedio</div>
</div>

<div class="mf-co-sec-title">Elegí tu plan — oferta activa</div>
<div class="mf-co-plans">

  <div class="mf-co-plan">
    <div class="mf-co-plan-top"><div class="mf-co-plan-name">Básico</div><div class="mf-co-off">30% OFF</div></div>
    <div class="mf-co-dur">📅 Programa de 4 semanas</div>
    <div class="mf-co-value-stack">
      <div class="mf-co-vs-label">✦ Qué recibís</div>` +
      vitem('🎬', 'Videos de rutina diaria personalizados por zona facial', '$8.000') +
      vitem('📋', 'Plan de 4 semanas con progresión semana a semana', '$7.000') +
      vitem('♾️', 'Acceso de por vida — pagás una vez, usás siempre', '$7.900') + `
    </div>
    <div class="mf-co-val-total"><span class="mf-co-val-total-label">Valor total</span><span class="mf-co-val-total-num">$22.900</span></div>
    <div class="mf-co-sep"></div>
    <div class="mf-co-price-block">
      <div class="mf-co-price-today">Precio de hoy</div>
      <div class="mf-co-price-row"><span class="mf-co-price-sym">$</span><span class="mf-co-price-num">15.990</span><span class="mf-co-price-ars">ARS</span></div>
    </div>
    <a href="${L30}" class="mf-co-cta">Empezar las 4 semanas →</a>
    <div class="mf-co-price-daily">≈ $533/día durante 30 días</div>
    <div class="mf-co-plan-urgency">⏳ A este precio solo mientras el timer esté activo</div>
  </div>

  <div class="mf-co-plan mf-feat">
    <div class="mf-co-best">⭐ Más elegido — mejor relación valor/precio</div>
    <div class="mf-co-plan-top"><div class="mf-co-plan-name">Intermedio</div><div class="mf-co-off">50% OFF</div></div>
    <div class="mf-co-dur">📅 8 semanas + bonos completos</div>
    <div class="mf-co-value-stack">
      <div class="mf-co-vs-label">✦ Qué recibís</div>` +
      vitem('🎬', 'Videos de rutina diaria personalizados por zona facial', '$8.000') +
      vitem('📋', 'Plan de 8 semanas — el doble de progresión y resultados', '$12.000') +
      vitem('🥗', '3 recetarios para reducción de grasa facial', '$9.000') +
      vitem('✨', 'Guía completa de nutrición facial y skin care', '$6.000') +
      vitem('♾️', 'Acceso de por vida al contenido', '$4.900') + `
    </div>
    <div class="mf-co-val-total"><span class="mf-co-val-total-label">Valor total</span><span class="mf-co-val-total-num">$39.900</span></div>
    <div class="mf-co-sep"></div>
    <div class="mf-co-price-block">
      <div class="mf-co-price-today">Precio de hoy</div>
      <div class="mf-co-price-row"><span class="mf-co-price-sym">$</span><span class="mf-co-price-num">19.990</span><span class="mf-co-price-ars">ARS</span></div>
    </div>
    <a href="${L60}" class="mf-co-cta">¡Quiero resultados completos! →</a>
    <div class="mf-co-price-daily">≈ $333/día durante 60 días</div>
    <div class="mf-co-plan-urgency">⏳ <em>50% OFF</em> solo mientras el timer esté activo</div>
  </div>

  <div class="mf-co-plan">
    <div class="mf-co-plan-top"><div class="mf-co-plan-name">Full</div><div class="mf-co-off">70% OFF</div></div>
    <div class="mf-co-dur">📅 12 semanas — Acceso total y vitalicio</div>
    <div class="mf-co-value-stack">
      <div class="mf-co-vs-label">✦ Qué recibís</div>` +
      vitem('🎬', 'Videos de rutina diaria personalizados por zona facial', '$8.000') +
      vitem('📋', 'Plan de 12 semanas con progresión avanzada completa', '$18.000') +
      vitem('🥗', '3 recetarios para reducción de grasa facial', '$9.000') +
      vitem('✨', 'Guía completa de nutrición facial y skin care', '$6.000') +
      vitem('🔓', 'Acceso total a <strong>todo</strong> el contenido de Laura Fazio', '$28.000') +
      vitem('🔄', 'Todas las actualizaciones futuras — sin pagar nunca más', '$30.900') + `
    </div>
    <div class="mf-co-val-total"><span class="mf-co-val-total-label">Valor total</span><span class="mf-co-val-total-num">$99.900</span></div>
    <div class="mf-co-sep"></div>
    <div class="mf-co-full-note">💡 <span>Si sabés que vas a continuar, <strong>el Full sale menos que volver a comprar después.</strong> Pagás una vez y nunca más.</span></div>
    <div class="mf-co-price-block">
      <div class="mf-co-price-today">Precio de hoy</div>
      <div class="mf-co-price-row"><span class="mf-co-price-sym">$</span><span class="mf-co-price-num">29.990</span><span class="mf-co-price-ars">ARS</span></div>
    </div>
    <a href="${L90}" class="mf-co-cta">Quiero acceso total →</a>
    <div class="mf-co-price-daily">≈ $250/día durante 120 días</div>
    <div class="mf-co-plan-urgency">⏳ <em>70% OFF</em> solo con el timer activo</div>
  </div>

</div>

<div class="mf-co-guarantee">
  <div class="mf-co-g-badge"><div class="mf-co-g-days">30</div><div class="mf-co-g-label">días</div></div>
  <div class="mf-co-g-text">
    <div class="mf-co-g-title">Garantía de devolución total</div>
    <div class="mf-co-g-desc">Si en 30 días no ves resultados o no estás conforme, te devolvemos el 100% de tu dinero. Sin preguntas.</div>
  </div>
</div>

<div class="mf-co-sec-title">Preguntas frecuentes</div>
<div class="mf-co-faq">` +
  FAQ.map(function (f) {
    return '<div class="mf-co-faq-item"><div class="mf-co-faq-q" data-mf-faq><span>' + f[0] +
      '</span><div class="mf-co-faq-icon">+</div></div><div class="mf-co-faq-a">' + f[1] + '</div></div>';
  }).join('') + `
</div>

<div class="mf-co-seals">
  <div class="mf-co-seal">🔒 Pago seguro</div>
  <div class="mf-co-seal">🇦🇷 Precio en ARS</div>
  <div class="mf-co-seal">⚡ Acceso inmediato</div>
  <div class="mf-co-seal">🛡️ Garantía 30 días</div>
</div>`;

  /* ── 5. MONTAJE ───────────────────────────────────────────────────── */
  var st = document.createElement('style');
  st.id = 'mf-co-style';
  st.textContent = css;
  document.head.appendChild(st);

  var host = document.getElementById('mf-checkout');
  if (!host) {
    host = document.createElement('div');
    (document.currentScript ? document.currentScript.parentNode : document.body).appendChild(host);
  }
  host.className = 'mf-co-wrap';
  host.innerHTML = html;

  /* ── 6. CARRUSEL ──────────────────────────────────────────────────── */
  var cur = 0, N = IMGS.length;
  var track = host.querySelector('#mfTrack'),
      dots = host.querySelectorAll('.mf-co-cdot'),
      cap = host.querySelector('#mfCaption');

  function update() {
    track.style.transform = 'translateX(-' + (cur * (100 / N)) + '%)';
    for (var i = 0; i < dots.length; i++) dots[i].classList.toggle('active', i === cur);
    cap.textContent = IMGS[cur].cap;
  }
  host.addEventListener('click', function (e) {
    var m = e.target.closest('[data-mf-move]'),
        g = e.target.closest('[data-mf-go]'),
        q = e.target.closest('[data-mf-faq]');
    if (m) { cur = (cur + parseInt(m.getAttribute('data-mf-move'), 10) + N) % N; update(); }
    if (g) { cur = parseInt(g.getAttribute('data-mf-go'), 10); update(); }
    if (q) { q.parentElement.classList.toggle('open'); }
  });

  /* ── 7. TIMER ─────────────────────────────────────────────────────── */
  var KEY = 'mf_timer_end_v4', DURATION = 3600, endTime;
  try {
    var s = sessionStorage.getItem(KEY);
    endTime = s ? parseInt(s, 10) : 0;
    if (!endTime || endTime <= Date.now()) {
      endTime = Date.now() + DURATION * 1000;
      sessionStorage.setItem(KEY, endTime.toString());
    }
  } catch (e) {
    endTime = Date.now() + DURATION * 1000;
  }

  var hrsEl = host.querySelector('#mfTimerHrs'),
      minEl = host.querySelector('#mfTimerMin'),
      secEl = host.querySelector('#mfTimerSec'),
      barEl = host.querySelector('#mfTimerBar');

  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function flash(el, v) {
    var t = pad(v);
    if (el.textContent !== t) {
      el.textContent = t;
      el.classList.remove('changing');
      void el.offsetWidth;
      el.classList.add('changing');
    }
  }
  function tick() {
    var rem = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
    flash(hrsEl, Math.floor(rem / 3600));
    flash(minEl, Math.floor((rem % 3600) / 60));
    flash(secEl, rem % 60);
    if (barEl) barEl.style.width = (rem / DURATION * 100) + '%';
    if (rem > 0) setTimeout(tick, 1000);
  }
  tick();
})();

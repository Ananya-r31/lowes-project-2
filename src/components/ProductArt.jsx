// Built-in product illustrations, so images never break offline.
const ink = '#14213D'
const arts = {
  mobile: (
    <>
      <rect x="70" y="20" width="60" height="120" rx="12" fill={ink} />
      <rect x="75" y="30" width="50" height="98" rx="6" fill="#5B7CFA" />
      <circle cx="90" cy="60" r="12" fill="#fff" opacity=".85" />
      <rect x="82" y="84" width="36" height="6" rx="3" fill="#fff" opacity=".7" />
      <rect x="82" y="96" width="24" height="6" rx="3" fill="#fff" opacity=".5" />
      <rect x="92" y="24" width="16" height="3" rx="1.5" fill="#3a4766" />
    </>
  ),
  headphones: (
    <>
      <path d="M52 92V80a48 48 0 0 1 96 0v12" fill="none" stroke={ink} strokeWidth="9" strokeLinecap="round" />
      <rect x="42" y="88" width="24" height="42" rx="11" fill="#F0673C" />
      <rect x="134" y="88" width="24" height="42" rx="11" fill="#F0673C" />
      <rect x="46" y="96" width="10" height="26" rx="5" fill={ink} opacity=".35" />
      <rect x="144" y="96" width="10" height="26" rx="5" fill={ink} opacity=".35" />
    </>
  ),
  computer: (
    <>
      <rect x="45" y="32" width="110" height="74" rx="7" fill={ink} />
      <rect x="51" y="38" width="98" height="62" rx="3" fill="#39B384" />
      <path d="M51 88l30-26 22 18 18-12 28 22v8H51z" fill="#fff" opacity=".35" />
      <path d="M30 112h140l-8 14H38z" fill="#8A97AD" />
      <rect x="84" y="112" width="32" height="4" rx="2" fill="#5d6a80" />
    </>
  ),
  charger: (
    <>
      <rect x="62" y="30" width="76" height="86" rx="14" fill="#fff" stroke={ink} strokeWidth="6" />
      <rect x="82" y="16" width="8" height="18" rx="2" fill={ink} />
      <rect x="110" y="16" width="8" height="18" rx="2" fill={ink} />
      <rect x="86" y="70" width="28" height="12" rx="6" fill={ink} />
      <path d="M104 44l-10 18h8l-4 14 12-20h-8z" fill="#F2B705" />
      <path d="M100 116v20q0 10 10 10h20" fill="none" stroke={ink} strokeWidth="5" strokeLinecap="round" />
    </>
  ),
  coffee: (
    <>
      <rect x="50" y="22" width="76" height="14" rx="6" fill={ink} />
      <rect x="56" y="34" width="14" height="94" rx="4" fill={ink} />
      <rect x="66" y="34" width="60" height="40" fill="#fff" opacity=".9" />
      <rect x="66" y="52" width="60" height="22" fill="#8B5E3C" opacity=".85" />
      <rect x="50" y="128" width="86" height="12" rx="5" fill={ink} />
      <rect x="86" y="96" width="30" height="32" rx="4" fill="#fff" stroke={ink} strokeWidth="4" />
      <path d="M116 104h8a6 6 0 0 1 0 14h-8" fill="none" stroke={ink} strokeWidth="4" />
      <rect x="88" y="112" width="26" height="14" fill="#8B5E3C" />
    </>
  ),
}

export default function ProductArt({ name, label }) {
  return (
    <svg viewBox="0 0 200 160" role="img" aria-label={label} className="product-art">
      <ellipse cx="100" cy="146" rx="62" ry="6" fill="#000" opacity=".08" />
      {arts[name]}
    </svg>
  )
}

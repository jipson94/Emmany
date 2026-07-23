/* @ds-bundle: {"format":4,"namespace":"EmmanyDesignSystem_5eb588","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"c3030da50321","components/feedback/Alert.jsx":"4e99b2ce37a5","components/feedback/Badge.jsx":"9f655683be08","components/forms/Button.jsx":"4f2e0c4563ff","components/forms/Checkbox.jsx":"e58f65a8694c","components/forms/IconButton.jsx":"99bb8f8b371a","components/forms/Input.jsx":"3b1308bf66e9","components/forms/Select.jsx":"2ee54001fbec","components/forms/Switch.jsx":"da13e1f36b23","components/surfaces/Card.jsx":"b7a32fc27db2","components/surfaces/StatCard.jsx":"204a5d21e1eb","ui_kits/website/components/layout.jsx":"550dcbc4d0c4","ui_kits/website/pages/Contact.jsx":"f934aa42ded2","ui_kits/website/pages/Countries.jsx":"ee28470babf8","ui_kits/website/pages/Developers.jsx":"b89e2795d9d7","ui_kits/website/pages/Documentation.jsx":"b533e34105ba","ui_kits/website/pages/Gateway.jsx":"37205883dfa8","ui_kits/website/pages/Home.jsx":"910a8fe9f281","ui_kits/website/pages/Pricing.jsx":"dfa82c198ebf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EmmanyDesignSystem_5eb588 = window.EmmanyDesignSystem_5eb588 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Emmany lockup. Renders the brand mark (image) + "Emmany" wordmark in Montserrat.
 * Pass `markSrc` with the correct relative path to assets/emmany-mark-trim.png.
 */
function Logo({
  markSrc = 'assets/emmany-mark-trim.png',
  showWordmark = true,
  showMark = true,
  product,
  tone = 'dark',
  size = 40,
  style,
  ...rest
}) {
  const wordColor = tone === 'light' ? '#ffffff' : 'var(--navy-900)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.28,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), showMark && /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "Emmany",
    style: {
      height: size,
      width: 'auto',
      display: 'block'
    }
  }), showWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: size * 0.22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.82,
      fontWeight: 'var(--fw-extrabold)',
      letterSpacing: '-0.02em',
      color: wordColor,
      lineHeight: 1
    }
  }, "Emmany"), product && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-300)',
      fontWeight: 300,
      fontSize: size * 0.8,
      lineHeight: 1
    }
  }, "|"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.7,
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '-0.01em',
      color: 'var(--color-primary)',
      lineHeight: 1
    }
  }, product))));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bg: 'var(--blue-50)',
    bd: 'var(--blue-100)',
    accent: 'var(--color-primary)',
    fg: 'var(--navy-800)'
  },
  success: {
    bg: 'var(--success-soft)',
    bd: '#bfe9d8',
    accent: 'var(--success)',
    fg: '#0a3d2e'
  },
  warning: {
    bg: 'var(--warning-soft)',
    bd: '#f4dca6',
    accent: 'var(--warning)',
    fg: '#5c3d00'
  },
  danger: {
    bg: 'var(--danger-soft)',
    bd: '#f3c2c4',
    accent: 'var(--danger)',
    fg: '#5c1517'
  }
};
function Alert({
  title,
  children,
  tone = 'info',
  icon,
  onClose,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      background: t.bg,
      border: `1px solid ${t.bd}`,
      fontFamily: 'var(--font-sans)',
      color: t.fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: t.accent,
      flexShrink: 0,
      marginTop: 1
    }
  }, icon || /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: t.accent,
      padding: 0,
      display: 'flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--gray-100)',
    fg: 'var(--gray-700)',
    bd: 'var(--gray-200)'
  },
  brand: {
    bg: 'var(--blue-50)',
    fg: 'var(--blue-700)',
    bd: 'var(--blue-100)'
  },
  accent: {
    bg: 'var(--cyan-50)',
    fg: 'var(--cyan-700)',
    bd: 'var(--cyan-100)'
  },
  success: {
    bg: 'var(--success-soft)',
    fg: '#00795a',
    bd: '#bfe9d8'
  },
  warning: {
    bg: 'var(--warning-soft)',
    fg: '#8a5a00',
    bd: '#f4dca6'
  },
  danger: {
    bg: 'var(--danger-soft)',
    fg: '#b4272b',
    bd: '#f3c2c4'
  }
};
const SOLID = {
  neutral: {
    bg: 'var(--navy-900)',
    fg: '#fff'
  },
  brand: {
    bg: 'var(--color-primary)',
    fg: '#fff'
  },
  accent: {
    bg: 'var(--color-accent)',
    fg: 'var(--navy-900)'
  },
  success: {
    bg: 'var(--success)',
    fg: '#fff'
  },
  warning: {
    bg: 'var(--warning)',
    fg: 'var(--navy-900)'
  },
  danger: {
    bg: 'var(--danger)',
    fg: '#fff'
  }
};
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  dot = false,
  style,
  ...rest
}) {
  const t = solid ? SOLID[tone] || SOLID.neutral : TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.01em',
      lineHeight: 1.4,
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      border: solid ? 'none' : `1px solid ${t.bd}`,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    fontSize: '0.875rem',
    padding: '0 14px',
    height: 36,
    gap: 6
  },
  md: {
    fontSize: '0.9375rem',
    padding: '0 20px',
    height: 44,
    gap: 8
  },
  lg: {
    fontSize: '1.0625rem',
    padding: '0 28px',
    height: 54,
    gap: 10
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--text-on-primary)',
    border: '1px solid var(--color-primary)',
    boxShadow: 'var(--shadow-brand)'
  },
  accent: {
    background: 'var(--color-accent)',
    color: 'var(--text-on-accent)',
    border: '1px solid var(--color-accent)',
    boxShadow: 'var(--shadow-accent)'
  },
  secondary: {
    background: 'var(--navy-900)',
    color: '#fff',
    border: '1px solid var(--navy-900)',
    boxShadow: 'var(--shadow-sm)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: '1.5px solid var(--border-default)',
    boxShadow: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: '1px solid transparent',
    boxShadow: 'none'
  }
};
const HOVER = {
  primary: 'var(--color-primary-hover)',
  accent: 'var(--color-accent-strong)',
  secondary: 'var(--navy-800)',
  outline: 'var(--blue-50)',
  ghost: 'var(--gray-100)'
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft,
  iconRight,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const hoverBg = HOVER[variant];
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--tracking-tight)',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    transition: 'var(--transition-base)',
    opacity: disabled ? 0.45 : 1,
    transform: hover && !disabled ? 'translateY(-1px)' : 'none',
    ...v,
    ...(hover && !disabled ? {
      background: hoverBg,
      borderColor: variant === 'outline' ? 'var(--color-primary)' : hoverBg
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: base,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const cbId = id || reactId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: 'var(--radius-xs)',
      background: on ? 'var(--color-primary)' : '#fff',
      border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--border-strong)'}`,
      transition: 'var(--transition-base)',
      color: '#fff'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 36,
  md: 44,
  lg: 54
};
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  'aria-label': ariaLabel,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: '#fff',
      border: '1px solid var(--color-primary)'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--navy-900)',
      border: '1px solid var(--color-accent)'
    },
    outline: {
      background: '#fff',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid transparent'
    }
  };
  const hoverBg = {
    primary: 'var(--color-primary-hover)',
    accent: 'var(--color-accent-strong)',
    outline: 'var(--gray-100)',
    ghost: 'var(--gray-100)'
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-base)',
      opacity: disabled ? 0.45 : 1,
      padding: 0,
      ...v,
      ...(hover && !disabled ? {
        background: hoverBg[variant]
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  iconLeft,
  size = 'md',
  id,
  style,
  disabled,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const inputId = id || reactId;
  const heights = {
    sm: 38,
    md: 46,
    lg: 54
  };
  const h = heights[size] || heights.md;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--color-primary)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 14px',
      background: disabled ? 'var(--gray-100)' : '#fff',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${borderColor}`,
      boxShadow: focus ? error ? '0 0 0 3px var(--danger-soft)' : 'var(--ring)' : 'none',
      transition: 'var(--transition-base)',
      opacity: disabled ? 0.6 : 1
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-muted)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      height: '100%',
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  size = 'md',
  id,
  style,
  disabled,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const selectId = id || reactId;
  const heights = {
    sm: 38,
    md: 46,
    lg: 54
  };
  const h = heights[size] || heights.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: h
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: '100%',
      padding: '0 40px 0 14px',
      appearance: 'none',
      fontFamily: 'inherit',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: disabled ? 'var(--gray-100)' : '#fff',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${focus ? 'var(--color-primary)' : 'var(--border-default)'}`,
      boxShadow: focus ? 'var(--ring)' : 'none',
      transition: 'var(--transition-base)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      outline: 'none'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled,
  size = 'md',
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const dims = size === 'sm' ? {
    w: 36,
    h: 20,
    k: 14
  } : {
    w: 46,
    h: 26,
    k: 20
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: dims.w,
      height: dims.h,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--color-primary)' : 'var(--gray-300)',
      transition: 'var(--transition-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: (dims.h - dims.k) / 2,
      left: on ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
      width: dims.k,
      height: dims.k,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'var(--transition-base)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  elevated = false,
  interactive = false,
  accent = false,
  padding = 'md',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--border-subtle)',
      padding: pads[padding] ?? pads.md,
      boxShadow: hover ? 'var(--shadow-lg)' : elevated ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'var(--transition-base)',
      cursor: interactive ? 'pointer' : 'default',
      overflow: 'hidden',
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: 'var(--gradient-brand)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatCard({
  value,
  label,
  delta,
  deltaTone = 'success',
  icon,
  dark = false,
  style,
  ...rest
}) {
  const fg = dark ? '#fff' : 'var(--text-strong)';
  const muted = dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  const deltaColors = {
    success: 'var(--success)',
    danger: 'var(--danger)',
    neutral: muted
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 'var(--space-6)',
      background: dark ? 'var(--surface-inverse)' : 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      border: dark ? '1px solid var(--navy-700)' : '1px solid var(--border-subtle)',
      boxShadow: dark ? 'none' : 'var(--shadow-xs)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: dark ? 'rgba(255,255,255,0.08)' : 'var(--blue-50)',
      color: 'var(--color-primary)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--fw-extrabold)',
      letterSpacing: 'var(--tracking-tight)',
      color: fg,
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: muted
    }
  }, label), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      color: deltaColors[deltaTone]
    }
  }, delta)));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/layout.jsx
try { (() => {
// Shared website chrome (matched to Emmany mockup): Icon, Container, Nav, Footer, StatusBadge.
const {
  useState,
  useEffect,
  useRef
} = React;
const MARK = '../../assets/emmany-mark-trim.png';
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = '<i data-lucide="' + name + '"></i>';
    if (window.lucide) window.lucide.createIcons();
    const svg = el.querySelector('svg');
    if (svg) {
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('stroke-width', strokeWidth);
      svg.style.display = 'block';
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      color,
      ...style
    }
  });
}
function useLucide(dep) {
  useEffect(() => {
    if (!window.lucide) return;
    window.lucide.createIcons();
    document.querySelectorAll('i[data-stroke] svg').forEach(svg => svg.setAttribute('stroke-width', svg.parentElement.getAttribute('data-stroke')));
  }, [dep]);
}

// Compteur animé (count-up) à l'apparition à l'écran.
function useCountUp(target, {
  duration = 2400,
  decimals = 0
} = {}) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let raf,
      started = false;
    const run = () => {
      const t0 = performance.now();
      const tick = t => {
        const p = Math.min(1, (t - t0) / duration);
        const e = 1 - Math.pow(1 - p, 3);
        setVal(target * e);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting && !started) {
        started = true;
        run();
        io.disconnect();
      }
    }), {
      threshold: 0.3,
      root: document.getElementById('site-scroll')
    });
    io.observe(node);
    const rect = node.getBoundingClientRect();
    if (!started && rect.top < (window.innerHeight || 900) && rect.bottom > 0) {
      started = true;
      run();
      io.disconnect();
    }
    const fb = setTimeout(() => {
      if (!started) {
        started = true;
        run();
        io.disconnect();
      }
    }, 600);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(fb);
    };
  }, [target]);
  return [ref, val];
}
function CountUp({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  style
}) {
  const [ref, v] = useCountUp(value, {
    decimals
  });
  const txt = v.toLocaleString('fr-FR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).replace(/\u202f/g, ',');
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: style
  }, prefix, txt, suffix);
}
const Container = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    maxWidth: 'var(--container-xl)',
    margin: '0 auto',
    padding: '0 24px',
    boxSizing: 'border-box',
    ...style
  }
}, children);
const Eyebrow = ({
  children,
  tone = 'primary',
  style
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    color: tone === 'light' ? 'var(--cyan-400)' : 'var(--color-primary)',
    ...style
  }
}, children);
const STATUS = {
  actif: {
    label: 'Actif',
    bg: 'var(--success-soft)',
    fg: '#00795a'
  },
  bientot: {
    label: 'Bientôt disponible',
    bg: 'var(--blue-50)',
    fg: 'var(--blue-700)'
  },
  maintenance: {
    label: 'En maintenance',
    bg: 'var(--warning-soft)',
    fg: '#8a5a00'
  },
  sandbox: {
    label: 'Sandbox uniquement',
    bg: '#fde7d3',
    fg: '#b45309'
  }
};
function StatusBadge({
  kind,
  children
}) {
  const s = STATUS[kind] || STATUS.actif;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 10px',
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      background: s.bg,
      color: s.fg,
      whiteSpace: 'nowrap'
    }
  }, children || s.label);
}
function Logo({
  tone = 'dark',
  product,
  size = 30
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: "Emmany",
    style: {
      height: size,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: size * 0.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.8,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: tone === 'light' ? '#fff' : 'var(--ink)',
      lineHeight: 1
    }
  }, "Emmany"), product && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-300)',
      fontWeight: 300,
      fontSize: size * 0.72
    }
  }, "|"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.62,
      fontWeight: 500,
      color: 'var(--color-primary)',
      lineHeight: 1
    }
  }, product))));
}
function Nav({
  current,
  onNav
}) {
  const items = [['gateway', 'Produits'], ['countries', 'Pays & frais'], ['developers', 'Développeurs'], ['docs', 'Documentation'], ['pricing', 'Tarifs']];
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('em-theme') || 'light';
    } catch (e) {
      return 'light';
    }
  });
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('em-theme', theme);
    } catch (e) {}
  }, [theme]);
  const toggleTheme = () => setTheme(t => {
    const next = t === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('em-theme', next);
    } catch (e) {}
    return next;
  });
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--nav-bg)',
      backdropFilter: 'saturate(180%) blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 68
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      transition: 'transform .18s'
    },
    onMouseEnter: e => e.currentTarget.style.transform = 'scale(1.03)',
    onMouseLeave: e => e.currentTarget.style.transform = 'scale(1)'
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 28
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, items.map(([k, l, caret]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    className: 'em-navlink' + (current === k ? ' active' : ''),
    onClick: () => onNav(k),
    style: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '22px 12px',
      fontSize: 14.5,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      color: current === k ? 'var(--color-primary)' : 'var(--ink-3)'
    }
  }, l, caret && /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 15,
    color: "var(--gray-400)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleTheme,
    "aria-label": "Basculer le th\xE8me",
    className: "em-btn",
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: 'var(--surface)',
      border: '1.5px solid var(--border-default)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'dark' ? 'sun' : 'moon',
    size: 17,
    color: "var(--ink-2)"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('login'),
    className: "em-btn em-btn-ghost",
    style: {
      height: 40,
      padding: '0 16px',
      borderRadius: 8,
      background: 'var(--surface)',
      border: '1.5px solid var(--border-default)',
      color: 'var(--ink)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14.5,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-in",
    size: 16
  }), "Connexion"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('contact'),
    className: "em-btn em-btn-primary",
    style: {
      height: 40,
      padding: '0 18px',
      borderRadius: 8,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14.5,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-plus",
    size: 16,
    color: "#fff"
  }), "Cr\xE9er un compte"))));
}
function Footer({
  onNav
}) {
  const cols = [['Produits', ['Emmany Gateway', 'Fonctionnalités', 'Pays & frais']], ['Ressources', ['Documentation', 'Guides', 'API Status']], ['Société', ['À propos', 'Carrières', 'Contact']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      color: 'var(--text-on-dark-muted)',
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.8fr 1fr 1fr 1fr 1.1fr',
      gap: 28,
      paddingBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/emmany-logo-footer.png",
    alt: "Emmany",
    style: {
      height: 34,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 13.5,
      lineHeight: 1.7,
      maxWidth: 240
    }
  }, "Infrastructure de paiement s\xE9curis\xE9e et \xE9volutive pour l'Afrique et le monde.")), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#fff',
      marginBottom: 14
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    className: "em-footlink",
    onClick: () => onNav && onNav(l === 'Emmany Gateway' ? 'gateway' : l === 'Pays & frais' || l === 'Fonctionnalités' ? 'countries' : l === 'Documentation' || l === 'Guides' || l === 'API Status' ? 'docs' : l === 'Contact' ? 'contact' : 'home'),
    style: {
      cursor: 'pointer',
      fontSize: 13.5,
      color: '#9fb0cc'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#fff',
      marginBottom: 14
    }
  }, "Suivez-nous"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['at-sign', 'send', 'code'].map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "em-social",
    style: {
      cursor: 'pointer',
      width: 36,
      height: 36,
      borderRadius: 8,
      background: 'rgba(255,255,255,0.06)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s,
    size: 17,
    color: "#9fb0cc"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--navy-700)',
      padding: '20px 0 36px',
      fontSize: 13
    }
  }, "\xA9 2026 Emmany \u2014 Infrastructure de paiement \xB7 Orchestration s\xE9curis\xE9e")));
}
Object.assign(window, {
  Icon,
  useLucide,
  Container,
  Eyebrow,
  Logo,
  Nav,
  Footer,
  StatusBadge,
  MARK,
  CountUp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/layout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Contact.jsx
try { (() => {
// Emmany — Connexion & Inscription (distincts, avec visuels générés).
const {
  useState: useStateC
} = React;
const inputStyle = {
  height: 40,
  padding: '0 13px',
  border: '1.5px solid var(--border-default)',
  borderRadius: 'var(--radius-md)',
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  color: 'var(--ink)',
  outline: 'none',
  background: 'var(--surface)',
  width: '100%',
  boxSizing: 'border-box'
};
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, label), children);
}
const MODES = {
  login: {
    img: '../../assets/auth-login.png',
    bullets: [['zap', 'Accédez à votre tableau de bord en direct'], ['bar-chart-3', 'Suivez volumes et taux de succès'], ['bell', 'Alertes et webhooks en temps réel']],
    panelTitle: 'Vos paiements, en un coup d’œil',
    panelText: 'Reconnectez-vous pour piloter vos transactions, versements et rapports.',
    formTitle: 'Bon retour',
    formSub: 'Connectez-vous à votre espace Emmany.',
    cta: 'Se connecter',
    doneTitle: 'Connexion réussie',
    accent: 'var(--color-primary)'
  },
  signup: {
    img: '../../assets/auth-signup.png',
    bullets: [['flask-conical', 'Accès instantané au sandbox'], ['shield-check', 'Certifié PCI-DSS Niveau 1'], ['headphones', "Ingénieur d'onboarding dédié"]],
    panelTitle: 'Passons à la production',
    panelText: 'Tellez-nous en un peu sur votre activité et lancez votre sandbox en quelques minutes.',
    formTitle: 'Créez votre compte',
    formSub: 'Gratuit pour commencer · sans carte bancaire.',
    cta: 'Créer mon compte',
    doneTitle: 'Compte créé !',
    accent: 'var(--cyan-500)'
  }
};
function Panel({
  m
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: m.img,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(4,24,51,.45) 0%, rgba(4,24,51,0) 34%, rgba(4,24,51,.35) 62%, rgba(4,24,51,.92) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '32px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: '#fff',
      margin: 0,
      lineHeight: 1.15
    }
  }, m.panelTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.85)',
      margin: '12px 0 22px',
      maxWidth: 380
    }
  }, m.panelText), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, m.bullets.map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 11,
      alignItems: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: 'rgba(255,255,255,.14)',
      backdropFilter: 'blur(4px)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17,
    color: "var(--cyan-400)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 500
    }
  }, t)))))));
}
function Contact({
  onNav,
  mode = 'signup'
}) {
  useLucide('contact' + mode);
  const m = MODES[mode];
  const [sent, setSent] = useStateC(false);
  const [form, setForm] = useStateC({
    name: '',
    email: '',
    company: '',
    password: '',
    volume: '0 – 50M XAF',
    agree: false
  });
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
  }));
  const canSubmit = mode === 'login' ? form.email && form.password : form.agree;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      height: 'calc(100vh - 80px)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    m: m
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 6%',
      height: '100%',
      overflowY: 'auto',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 400,
      animation: 'fadeUp .4s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom: 10,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 14,
    color: "var(--text-muted)"
  }), "Retour \xE0 l'accueil"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '10px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 72,
      height: 72,
      borderRadius: 999,
      background: 'var(--success-soft)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 36,
    color: "var(--success)"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: 'var(--ink)',
      margin: 0
    }
  }, m.doneTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      color: 'var(--ink-3)',
      margin: '12px 0 0',
      lineHeight: 1.6
    }
  }, mode === 'login' ? `Ravi de vous revoir${form.email ? ', ' + form.email : ''} !` : `Merci ${form.name || ''} — vos clés sandbox arrivent par e-mail.`), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('developers'),
    className: "em-btn em-btn-primary",
    style: {
      marginTop: 26,
      height: 48,
      padding: '0 26px',
      borderRadius: 999,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15.5
    }
  }, "Ouvrir la console")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      fontWeight: 600,
      color: m.accent,
      background: mode === 'login' ? 'var(--blue-50)' : 'var(--cyan-50)',
      borderRadius: 999,
      padding: '3px 11px',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: mode === 'login' ? 'log-in' : 'user-plus',
    size: 13,
    color: m.accent
  }), mode === 'login' ? 'Connexion' : 'Nouveau compte'), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 23,
      fontWeight: 800,
      color: 'var(--ink)',
      margin: 0
    }
  }, m.formTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '5px 0 14px'
    }
  }, m.formSub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, mode === 'signup' && /*#__PURE__*/React.createElement(Field, {
    label: "Nom complet"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: form.name,
    onChange: set('name'),
    placeholder: "Awa Diop"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail professionnel"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "email",
    value: form.email,
    onChange: set('email'),
    placeholder: "awa@entreprise.com"
  })), mode === 'login' ? /*#__PURE__*/React.createElement(Field, {
    label: "Mot de passe"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "password",
    value: form.password,
    onChange: set('password'),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "Entreprise"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: form.company,
    onChange: set('company'),
    placeholder: "Nom de l'entreprise"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Volume mensuel estim\xE9"
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      ...inputStyle,
      appearance: 'none'
    },
    value: form.volume,
    onChange: set('volume')
  }, ['0 – 50M XAF', '50M – 500M XAF', '500M – 5 Md XAF', '5 Md+ XAF'].map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))))), mode === 'login' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      color: 'var(--ink-3)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      width: 16,
      height: 16,
      accentColor: 'var(--color-primary)'
    }
  }), "Se souvenir de moi"), /*#__PURE__*/React.createElement("a", {
    style: {
      cursor: 'pointer',
      color: 'var(--color-primary)',
      fontWeight: 600
    }
  }, "Mot de passe oubli\xE9 ?")) : /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 14,
      color: 'var(--ink-3)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: form.agree,
    onChange: set('agree'),
    style: {
      width: 18,
      height: 18,
      accentColor: 'var(--color-primary)'
    }
  }), "J'accepte les Conditions & la Politique de confidentialit\xE9"), /*#__PURE__*/React.createElement("button", {
    disabled: !canSubmit,
    onClick: () => setSent(true),
    className: 'em-btn ' + (canSubmit ? 'em-btn-primary' : ''),
    style: {
      height: 48,
      borderRadius: 999,
      border: 'none',
      background: canSubmit ? 'var(--color-primary)' : 'var(--gray-300)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 15.5,
      cursor: canSubmit ? 'pointer' : 'not-allowed',
      marginTop: 4
    }
  }, m.cta)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 13.5,
      color: 'var(--ink-3)',
      marginTop: 12
    }
  }, mode === 'login' ? /*#__PURE__*/React.createElement(React.Fragment, null, "Pas encore de compte ? ", /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('contact'),
    style: {
      cursor: 'pointer',
      color: 'var(--color-primary)',
      fontWeight: 600
    }
  }, "Cr\xE9er un compte")) : /*#__PURE__*/React.createElement(React.Fragment, null, "D\xE9j\xE0 client ? ", /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('login'),
    style: {
      cursor: 'pointer',
      color: 'var(--color-primary)',
      fontWeight: 600
    }
  }, "Se connecter")))))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Countries.jsx
try { (() => {
// Emmany — Pays & moyens de paiement (maquette).
const {
  useState: useStateCo
} = React;
function Globe() {
  // Réseau de paiement : hub Emmany relié aux marchés, avec flux animés (paiements en transit).
  const hub = {
    x: 150,
    y: 150
  };
  const nodes = [{
    x: 44,
    y: 60,
    code: 'SN',
    c: 'var(--color-primary)'
  }, {
    x: 250,
    y: 52,
    code: 'CI',
    c: 'var(--cyan-500)'
  }, {
    x: 276,
    y: 150,
    code: 'CM',
    c: 'var(--color-primary)'
  }, {
    x: 244,
    y: 250,
    code: 'CG',
    c: 'var(--cyan-500)'
  }, {
    x: 56,
    y: 250,
    code: 'GA',
    c: 'var(--color-primary)'
  }, {
    x: 26,
    y: 148,
    code: 'TG',
    c: 'var(--cyan-500)'
  }];
  const paths = nodes.map((n, i) => {
    const mx = (hub.x + n.x) / 2 + (n.y - hub.y) * 0.16;
    const my = (hub.y + n.y) / 2 - (n.x - hub.x) * 0.16;
    return {
      id: 'flow' + i,
      d: `M${n.x},${n.y} Q${mx.toFixed(0)},${my.toFixed(0)} ${hub.x},${hub.y}`,
      node: n,
      dur: 2.4 + i * 0.35
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 380,
      height: 380,
      flexShrink: 0
    }
  }, [300, 230, 150].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: d,
      height: d,
      marginLeft: -d / 2,
      marginTop: -d / 2,
      borderRadius: '50%',
      border: '1.5px dashed var(--blue-100)',
      animation: `devOrbit ${24 + i * 8}s linear infinite ${i % 2 ? 'reverse' : ''}`
    }
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 300 300",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("defs", null, paths.map(p => /*#__PURE__*/React.createElement("path", {
    key: p.id,
    id: p.id,
    d: p.d,
    fill: "none"
  }))), paths.map(p => /*#__PURE__*/React.createElement("path", {
    key: 'l' + p.id,
    d: p.d,
    fill: "none",
    stroke: "var(--blue-200)",
    strokeWidth: "1.5",
    strokeDasharray: "3 5",
    opacity: "0.7"
  })), paths.map(p => /*#__PURE__*/React.createElement("circle", {
    key: 'd' + p.id,
    r: "4",
    fill: p.node.c
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: p.dur + 's',
    repeatCount: "indefinite",
    rotate: "0"
  }, /*#__PURE__*/React.createElement("mpath", {
    href: '#' + p.id
  })), /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: "0;1;1;0",
    keyTimes: "0;0.1;0.85;1",
    dur: p.dur + 's',
    repeatCount: "indefinite"
  })))), nodes.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: n.code,
    style: {
      position: 'absolute',
      left: `${n.x / 300 * 100}%`,
      top: `${n.y / 300 * 100}%`,
      transform: 'translate(-50%,-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 999,
      background: n.c,
      zIndex: 2,
      animation: `blinkDot 2.6s var(--ease-in-out) ${i * 0.3}s infinite`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 999,
      background: n.c,
      animation: `ping 2.6s var(--ease-out) ${i * 0.3}s infinite`
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      color: 'var(--ink-3)',
      background: 'var(--surface)',
      borderRadius: 5,
      padding: '1px 5px',
      boxShadow: 'var(--shadow-xs)'
    }
  }, n.code))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 130,
      height: 130,
      zIndex: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 122,
      height: 122,
      borderRadius: 999,
      border: '2px solid var(--cyan-400)',
      opacity: 0.4,
      animation: 'ping 3s var(--ease-out) infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 88,
      height: 88,
      borderRadius: 999,
      overflow: 'hidden',
      background: 'var(--color-primary)',
      boxShadow: 'var(--shadow-xl)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'floatY 5s var(--ease-in-out) infinite'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: "Emmany",
    style: {
      height: 42,
      filter: 'brightness(0) invert(1)'
    }
  }))));
}
const PROVIDERS = {
  Orange: {
    logo: '../../assets/op-orange.png'
  },
  Wave: {
    logo: '../../assets/op-wave.png'
  },
  MTN: {
    logo: '../../assets/op-mtn.png'
  },
  Airtel: {
    logo: '../../assets/op-airtel.png'
  },
  Moov: {
    logo: '../../assets/op-moov.png'
  },
  TMoney: {
    logo: '../../assets/op-tmoney.png'
  },
  Virement: {
    c: 'var(--ink-3)',
    fg: '#fff'
  },
  Cartes: {
    c: 'var(--gray-600)',
    fg: '#fff'
  }
};
function ProviderMark({
  p,
  icon
}) {
  const s = PROVIDERS[p] || PROVIDERS.Cartes;
  if (s.logo) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 58,
      height: 36,
      borderRadius: 8,
      overflow: 'hidden',
      flexShrink: 0,
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.logo,
    alt: p,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: 8,
      background: s.c,
      color: s.fg,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17,
    color: s.fg
  }));
}

// Deux meilleurs opérateurs Mobile Money par pays + virement + cartes.
const COUNTRY_DATA = {
  SN: {
    name: 'Sénégal',
    rows: [['Orange', 'phone', 'Orange Money Sénégal', 'Mobile Money', 'actif', '1.50%', '0.65%', ['Production', 'Sandbox']], ['Wave', 'phone', 'Wave Sénégal', 'Mobile Money', 'actif', '1.00%', '0.60%', ['Production', 'Sandbox']], ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'actif', '—', '0.50%', ['Production']], ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']]]
  },
  CI: {
    name: "Côte d'Ivoire",
    rows: [['Orange', 'phone', 'Orange Money Côte d\'Ivoire', 'Mobile Money', 'actif', '1.50%', '0.65%', ['Production', 'Sandbox']], ['MTN', 'phone', 'MTN Mobile Money Côte d\'Ivoire', 'Mobile Money', 'actif', '1.50%', '0.70%', ['Production', 'Sandbox']], ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'actif', '—', '0.50%', ['Production']], ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']]]
  },
  CM: {
    name: 'Cameroun',
    rows: [['Orange', 'phone', 'Orange Money Cameroun', 'Mobile Money', 'actif', '1.55%', '0.75%', ['Production', 'Sandbox']], ['MTN', 'phone', 'MTN Mobile Money Cameroun', 'Mobile Money', 'actif', '1.60%', '0.75%', ['Production', 'Sandbox']], ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'maintenance', '—', '0.50%', ['Production']], ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']]]
  },
  CG: {
    name: 'République du Congo',
    rows: [['MTN', 'phone', 'MTN Mobile Money Congo', 'Mobile Money', 'actif', '1.50%', '0.70%', ['Production', 'Sandbox']], ['Airtel', 'phone', 'Airtel Money Congo', 'Mobile Money', 'actif', '1.50%', '0.70%', ['Production', 'Sandbox']], ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'maintenance', '—', '0.50%', ['Production']], ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard) via partenaires', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']]]
  },
  GA: {
    name: 'Gabon',
    rows: [['Airtel', 'phone', 'Airtel Money Gabon', 'Mobile Money', 'actif', '1.60%', '0.75%', ['Production', 'Sandbox']], ['Moov', 'phone', 'Moov Money Gabon', 'Mobile Money', 'actif', '1.65%', '0.75%', ['Production', 'Sandbox']], ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'actif', '—', '0.50%', ['Production']], ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']]]
  },
  BJ: {
    name: 'Bénin',
    rows: [['MTN', 'phone', 'MTN Mobile Money Bénin', 'Mobile Money', 'actif', '1.50%', '0.70%', ['Production', 'Sandbox']], ['Moov', 'phone', 'Moov Money Bénin', 'Mobile Money', 'actif', '1.55%', '0.70%', ['Production', 'Sandbox']], ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'actif', '—', '0.50%', ['Production']], ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']]]
  },
  TG: {
    name: 'Togo',
    rows: [['TMoney', 'phone', 'T-Money (Togocom)', 'Mobile Money', 'actif', '1.55%', '0.70%', ['Production', 'Sandbox']], ['Moov', 'phone', 'Moov Money (Flooz)', 'Mobile Money', 'actif', '1.55%', '0.70%', ['Production', 'Sandbox']], ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'actif', '—', '0.50%', ['Production']], ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']]]
  }
};
function MethodsTable({
  rows
}) {
  const th = {
    textAlign: 'left',
    fontSize: 11.5,
    fontWeight: 600,
    letterSpacing: '.04em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    padding: '0 12px 12px'
  };
  const td = {
    padding: '14px 12px',
    fontSize: 13.5,
    color: 'var(--ink-3)',
    borderTop: '1px solid var(--border-subtle)',
    verticalAlign: 'middle'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '4px 0 16px'
    }
  }, rows.length, " moyens de paiement disponibles"), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: 720
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Moyen de paiement"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Type"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Statut"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Frais op\xE9rateur"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Frais PSP"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Environnement"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(([p, ic, name, type, status, fo, fp, envs]) => /*#__PURE__*/React.createElement("tr", {
    key: name
  }, /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ProviderMark, {
    p: p,
    icon: ic
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, name))), /*#__PURE__*/React.createElement("td", {
    style: td
  }, type), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: status
  })), /*#__PURE__*/React.createElement("td", {
    style: td
  }, fo), /*#__PURE__*/React.createElement("td", {
    style: td
  }, fp), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, envs.map(e => /*#__PURE__*/React.createElement("span", {
    key: e,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: e === 'Sandbox' ? 'var(--warning)' : 'var(--success)'
    }
  }), e)))))))));
}
function CountryRow({
  code,
  name,
  rows,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "em-card",
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 12,
      overflow: 'hidden',
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    className: "em-row",
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15.5,
      fontWeight: 700,
      color: open ? 'var(--color-primary)' : 'var(--ink)'
    }
  }, name, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 500
    }
  }, "(", code, ")")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, rows.length, " moyens")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 18,
    color: open ? 'var(--color-primary)' : 'var(--gray-400)',
    style: {
      transition: 'transform .25s var(--ease-out)',
      transform: open ? 'rotate(180deg)' : 'none'
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 22px',
      borderTop: '1px solid var(--border-subtle)',
      animation: 'fadeUp .3s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement(MethodsTable, {
    rows: rows
  })));
}
function Countries() {
  useLucide('countries');
  const list = ['SN', 'CI', 'CM', 'CG', 'GA', 'BJ', 'TG'];
  const [open, setOpen] = useStateCo('CG');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "reveal in",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Couverture"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 38,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: '12px 0 0'
    }
  }, "Pays & moyens de paiement"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: '12px 0 0'
    }
  }, "D\xE9couvrez les moyens de paiement disponibles par pays, leurs statuts et les frais associ\xE9s."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 24
    }
  }, [[12, 'Marchés', ''], [40, 'Moyens', '+'], [6, 'Devises', '']].map(([v, l, suf]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      color: 'var(--color-primary)'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    value: v,
    suffix: suf
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, l))))), /*#__PURE__*/React.createElement(Globe, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      marginBottom: 22
    }
  }, [['actif', 'Disponible en production'], ['bientot', 'Bientôt disponible'], ['maintenance', 'En maintenance'], ['sandbox', 'Sandbox uniquement']].map(([k, l]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12.5,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: k
  }), l))), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, list.map(code => /*#__PURE__*/React.createElement(CountryRow, {
    key: code,
    code: code,
    name: COUNTRY_DATA[code].name,
    rows: COUNTRY_DATA[code].rows,
    open: open === code,
    onToggle: () => setOpen(open === code ? null : code)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      marginTop: 24,
      background: 'var(--blue-50)',
      border: '1px solid var(--blue-100)',
      borderRadius: 12,
      padding: '14px 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 18,
    color: "var(--color-primary)",
    style: {
      marginTop: 1,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: 0
    }
  }, "Les frais et disponibilit\xE9s peuvent varier selon votre contrat marchand, l'op\xE9rateur et le pays. Contactez votre charg\xE9 de compte pour plus de d\xE9tails."))));
}
Object.assign(window, {
  Countries
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Countries.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Developers.jsx
try { (() => {
// Emmany — Développeurs (maquette) : hero animé, parcours, toggle Sandbox/Production, exemples.
const {
  useState: useStateDv
} = React;
function DevArt() {
  const rings = [[210, 22, 'var(--cyan-400)'], [160, 15, 'var(--color-primary)'], [110, 40, 'var(--cyan-400)']];
  const icons = [['webhook', 250, 55], ['key-round', 40, 90], ['smartphone', 250, 250], ['shield-check', 30, 240]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 260,
      height: 260,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,66,236,.12), transparent 65%)'
    }
  }), rings.map(([d, dur, c], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      width: d,
      height: d,
      borderRadius: '50%',
      border: '1.5px dashed var(--blue-100)',
      animation: `devOrbit ${dur}s linear infinite ${i % 2 ? 'reverse' : ''}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -5,
      left: '50%',
      width: 10,
      height: 10,
      borderRadius: 999,
      background: c,
      marginLeft: -5,
      boxShadow: '0 0 0 4px rgba(0,66,236,.08)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 92,
      height: 92,
      borderRadius: 24,
      background: 'var(--gradient-flow)',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'floatY 5s var(--ease-in-out) infinite',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    style: {
      height: 50,
      filter: 'brightness(0) invert(1)'
    }
  })), icons.map(([ic, l, top], i) => /*#__PURE__*/React.createElement("span", {
    key: ic,
    style: {
      position: 'absolute',
      left: l,
      top: top,
      width: 40,
      height: 40,
      borderRadius: 11,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: `floatY ${4 + i}s var(--ease-in-out) ${i * 0.4}s infinite`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 19,
    color: "var(--color-primary)"
  }))));
}
function Stepper() {
  const steps = ['Créer un compte', 'Activer la sandbox', 'Créer un projet', 'Générer une clé API', 'Initier un paiement', 'Suivre une transaction', 'Configurer un webhook', 'Passer en production'];
  const active = 3;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      overflowX: 'auto',
      paddingBottom: 8
    }
  }, steps.map((s, i) => {
    const done = i < active,
      cur = i === active;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        flex: i < steps.length - 1 ? 1 : '0 0 auto',
        minWidth: 96
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 96,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 34,
        height: 34,
        borderRadius: 999,
        fontWeight: 700,
        fontSize: 14,
        background: cur ? 'var(--success)' : done ? 'var(--color-primary)' : '#fff',
        color: cur || done ? '#fff' : 'var(--gray-500)',
        border: cur || done ? 'none' : '1.5px solid var(--border-default)',
        boxShadow: cur ? '0 0 0 5px var(--success-soft)' : 'none'
      }
    }, done ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      color: "#fff"
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        lineHeight: 1.35,
        textAlign: 'center',
        marginTop: 8,
        color: cur ? 'var(--ink)' : 'var(--text-muted)',
        fontWeight: cur ? 600 : 500
      }
    }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 2,
        background: i < active ? 'var(--color-primary)' : 'var(--border-default)',
        marginTop: 16
      }
    }));
  }));
}
const ENV = {
  sandbox: {
    base: 'https://sandbox.api.emmany.com',
    key: 'emy_test_••••••••••••••••',
    full: 'emy_test_9f2a7c1e4b8d0a6f3e5c1d',
    dot: 'var(--warning)',
    note: 'Environnement de test : aucun mouvement d\'argent réel. Utilisez les numéros et cartes de simulation.',
    badge: 'Aucune transaction réelle'
  },
  production: {
    base: 'https://api.emmany.com',
    key: 'emy_live_••••••••••••••••',
    full: 'emy_live_3d7b2f9a1c6e8054ad2b4f',
    dot: 'var(--success)',
    note: 'Environnement de production : les transactions sont réelles et débitées. Vérifiez vos webhooks et la conformité avant d\'activer.',
    badge: 'Transactions réelles'
  }
};
function CodeTabs({
  env
}) {
  const [tab, setTab] = useStateDv(0);
  const e = ENV[env];
  const tabs = ['Requête', 'Réponse', 'Webhook (exemple)'];
  const L = ({
    children,
    c
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      color: c || '#e6ecf5'
    }
  }, children);
  const req = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(L, {
    c: "#7ee3d8"
  }, "curl ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ff8a5c'
    }
  }, "-X POST"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#e6ecf5'
    }
  }, e.base, "/v1/payments"), " \\"), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0-H ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fe6b0'
    }
  }, "\"Authorization: Bearer ", env === 'production' ? 'emy_live_••••' : 'emy_test_••••', "\""), " \\"), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0-H ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fe6b0'
    }
  }, "\"Content-Type: application/json\""), " \\"), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0-d '", '{'), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"amount\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ffd479'
    }
  }, "10000"), ","), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"currency\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fe6b0'
    }
  }, "\"XAF\""), ","), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"country\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fe6b0'
    }
  }, "\"CG\""), ","), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"paymentMethod\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fe6b0'
    }
  }, "\"MTN_MOMO_CG\""), ","), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"customerPhone\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fe6b0'
    }
  }, "\"+242000000000\""), ","), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"callbackUrl\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fe6b0'
    }
  }, "\"https://votre-domaine.com/webhook/payment\"")), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0", '}', "'"));
  const res = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(L, null, '{'), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"id\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fe6b0'
    }
  }, "\"pay_8f2c1a\""), ","), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"status\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fe6b0'
    }
  }, "\"pending\""), ","), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"environment\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fe6b0'
    }
  }, "\"", env, "\""), ","), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"amount\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ffd479'
    }
  }, "10000")), /*#__PURE__*/React.createElement(L, null, '}'));
  const hook = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(L, null, '{'), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"event\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fe6b0'
    }
  }, "\"payment.succeeded\""), ","), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"id\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fe6b0'
    }
  }, "\"pay_8f2c1a\""), ","), /*#__PURE__*/React.createElement(L, null, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"status\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fe6b0'
    }
  }, "\"succeeded\"")), /*#__PURE__*/React.createElement(L, null, '}'));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 14,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(i),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 600,
      padding: '13px 14px',
      color: tab === i ? 'var(--color-primary)' : 'var(--ink-3)',
      borderBottom: `2px solid ${tab === i ? 'var(--color-primary)' : 'transparent'}`,
      marginBottom: -1
    }
  }, t))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--ink-3)',
      border: '1px solid var(--border-default)',
      borderRadius: 8,
      padding: '5px 10px'
    }
  }, "cURL", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14,
    color: "var(--gray-400)"
  }))), /*#__PURE__*/React.createElement("pre", {
    key: env + tab,
    style: {
      margin: 0,
      padding: '18px 20px',
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      lineHeight: 1.85,
      background: '#020c1f',
      color: '#e6ecf5',
      overflowX: 'auto',
      animation: 'fadeUp .3s var(--ease-out) both'
    }
  }, tab === 0 ? req : tab === 1 ? res : hook));
}
function KeyRow({
  env,
  e
}) {
  const [copied, setCopied] = useStateDv(false);
  const copy = () => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    };
    try {
      navigator.clipboard.writeText(e.full).then(done, () => {
        fallback();
        done();
      });
    } catch (err) {
      fallback();
      done();
    }
    function fallback() {
      const ta = document.createElement('textarea');
      ta.value = e.full;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch (x) {}
      document.body.removeChild(ta);
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    key: env + 'k',
    onClick: copy,
    title: "Copier la cl\xE9",
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      border: '1.5px solid var(--border-default)',
      borderRadius: 8,
      padding: '10px 12px',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--ink-2)',
      background: 'var(--surface)',
      cursor: 'pointer',
      animation: 'fadeUp .3s var(--ease-out) both'
    }
  }, e.key, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      color: copied ? 'var(--success)' : 'var(--gray-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: copied ? 'check' : 'copy',
    size: 16,
    color: copied ? 'var(--success)' : 'var(--gray-500)'
  }), copied ? 'Copié' : ''));
}
function Developers({
  onNav
}) {
  useLucide('developers');
  const [env, setEnv] = useStateDv('sandbox');
  const e = ENV[env];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "reveal in",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "D\xE9veloppeurs"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      letterSpacing: '-.03em',
      color: 'var(--ink)',
      margin: '12px 0 0',
      lineHeight: 1.1
    }
  }, "Int\xE9grez en quelques \xE9tapes"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      color: 'var(--ink-3)',
      margin: '14px 0 0',
      maxWidth: 440
    }
  }, "Suivez notre parcours recommand\xE9 pour int\xE9grer Emmany Gateway, du sandbox \xE0 la production."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('docs'),
    className: "em-btn em-btn-primary",
    style: {
      height: 46,
      padding: '0 22px',
      borderRadius: 8,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15
    }
  }, "Lire la documentation"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('contact'),
    className: "em-btn em-btn-ghost",
    style: {
      height: 46,
      padding: '0 20px',
      borderRadius: 8,
      background: 'var(--surface)',
      color: 'var(--ink)',
      border: '1.5px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15
    }
  }, "Obtenir mes cl\xE9s"))), /*#__PURE__*/React.createElement(DevArt, null)), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 14,
      padding: '28px 24px',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Stepper, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink)',
      marginBottom: 10
    }
  }, "Environnement"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 5,
      background: 'var(--gray-100)',
      borderRadius: 10
    }
  }, [['sandbox', 'Sandbox', 'var(--warning)'], ['production', 'Production', 'var(--success)']].map(([k, l, c]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setEnv(k),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 14px',
      borderRadius: 7,
      border: 'none',
      background: env === k ? '#fff' : 'transparent',
      fontSize: 13.5,
      fontWeight: 600,
      color: env === k ? 'var(--ink)' : 'var(--text-muted)',
      boxShadow: env === k ? 'var(--shadow-xs)' : 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      transition: 'all .18s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: env === k ? c : 'var(--gray-400)'
    }
  }), l))), /*#__PURE__*/React.createElement("div", {
    key: env,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      marginTop: 14,
      background: env === 'production' ? 'var(--success-soft)' : 'var(--warning-soft)',
      border: `1px solid ${env === 'production' ? '#b7e4cf' : '#f4dca6'}`,
      borderRadius: 10,
      padding: '12px 14px',
      animation: 'fadeUp .3s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: env === 'production' ? 'shield-check' : 'flask-conical',
    size: 17,
    color: e.dot,
    style: {
      marginTop: 1,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, e.badge), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.5,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, e.note)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink)',
      marginBottom: 10
    }
  }, "Cl\xE9 API active ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, "\xB7 ", env)), /*#__PURE__*/React.createElement(KeyRow, {
    env: env,
    e: e
  }), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('contact'),
    style: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--color-primary)',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "key-round",
    size: 15,
    color: "var(--color-primary)"
  }), "G\xE9rer mes cl\xE9s API")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink)',
      marginBottom: 12
    }
  }, "Ressources rapides"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['book-open', 'Documentation API'], ['compass', "Guides d'intégration"], ['box', 'Bibliothèques & SDKs'], ['activity', 'API Status']].map(([ic, t]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    onClick: () => onNav('docs'),
    className: "em-footlink",
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17,
    color: "var(--color-primary)"
  }), t))))), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(CodeTabs, {
    env: env
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      marginTop: 16,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "life-buoy",
    size: 16,
    color: "var(--color-primary)"
  }), "Besoin d'aide ? Consultez nos guides ou ouvrez un ticket sur notre support d\xE9veloppeur.")))));
}
Object.assign(window, {
  Developers
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Developers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Documentation.jsx
try { (() => {
// Emmany — Documentation (nouveau) : sidebar de navigation + contenu riche.
const {
  useState: useStateDoc
} = React;
const DOC_NAV = [['Démarrage', [['intro', 'Introduction'], ['auth', 'Authentification'], ['env', 'Environnements']]], ['Paiements', [['collect', 'Encaisser un paiement'], ['status', 'Statuts & cycle de vie'], ['webhooks', 'Webhooks']]], ['Ressources', [['errors', "Codes d'erreur"], ['sdks', 'SDKs & bibliothèques'], ['limits', 'Limites & quotas']]]];
function DocBlock({
  id,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    style: {
      scrollMarginTop: 90,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: '0 0 14px'
    }
  }, title), children);
}
const P = ({
  children
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    lineHeight: 1.7,
    color: 'var(--ink-3)',
    margin: '0 0 14px'
  }
}, children);
function Code({
  children
}) {
  return /*#__PURE__*/React.createElement("pre", {
    style: {
      background: '#020c1f',
      color: '#e6ecf5',
      borderRadius: 12,
      padding: '16px 18px',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.75,
      overflowX: 'auto',
      margin: '0 0 18px'
    }
  }, children);
}
function Method({
  m,
  path
}) {
  const c = {
    GET: 'var(--success)',
    POST: 'var(--color-primary)',
    DELETE: 'var(--danger)'
  }[m];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--gray-50)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 10,
      padding: '10px 14px',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      color: '#fff',
      background: c,
      borderRadius: 6,
      padding: '3px 9px',
      fontFamily: 'var(--font-mono)'
    }
  }, m), /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, path));
}
function Documentation({
  onNav
}) {
  useLucide('docs');
  const [active, setActive] = useStateDoc('intro');
  const go = id => {
    setActive(id);
    const el = document.getElementById(id);
    const scr = document.getElementById('site-scroll');
    if (el && scr) scr.scrollTo({
      top: el.offsetTop - 80,
      behavior: 'smooth'
    });
  };
  const th = {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 600,
    color: 'var(--text-muted)',
    padding: '0 12px 10px',
    textTransform: 'uppercase',
    letterSpacing: '.04em'
  };
  const td = {
    padding: '11px 12px',
    fontSize: 13.5,
    borderTop: '1px solid var(--border-subtle)',
    color: 'var(--ink-3)'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "reveal in",
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Documentation"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 38,
      fontWeight: 800,
      letterSpacing: '-.03em',
      color: 'var(--ink)',
      margin: '12px 0 0'
    }
  }, "R\xE9f\xE9rence & guides Emmany Gateway"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      color: 'var(--ink-3)',
      margin: '12px 0 0',
      maxWidth: 600
    }
  }, "Tout ce qu'il faut pour int\xE9grer les paiements Mobile Money, cartes et virements via une seule API PSP.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '230px 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 88,
      alignSelf: 'start'
    }
  }, DOC_NAV.map(([group, items]) => /*#__PURE__*/React.createElement("div", {
    key: group,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, group), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      borderLeft: '2px solid var(--border-subtle)'
    }
  }, items.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id),
    style: {
      cursor: 'pointer',
      fontSize: 13.5,
      padding: '6px 12px',
      marginLeft: -2,
      borderLeft: `2px solid ${active === id ? 'var(--color-primary)' : 'transparent'}`,
      color: active === id ? 'var(--color-primary)' : 'var(--ink-3)',
      fontWeight: active === id ? 600 : 500
    }
  }, label)))))), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(DocBlock, {
    id: "intro",
    title: "Introduction"
  }, /*#__PURE__*/React.createElement(P, null, "L'API Emmany est organis\xE9e autour de REST. Elle utilise des URL orient\xE9es ressources, accepte des corps de requ\xEAte en JSON, renvoie des r\xE9ponses en JSON et s'appuie sur les codes de statut HTTP standards. Toutes les requ\xEAtes se font en HTTPS."), /*#__PURE__*/React.createElement(Method, {
    m: "POST",
    path: "https://api.emmany.com/v1/payments"
  }), /*#__PURE__*/React.createElement(P, null, "Chaque compte dispose de deux environnements totalement isol\xE9s : ", /*#__PURE__*/React.createElement("strong", null, "Sandbox"), " pour tester, et ", /*#__PURE__*/React.createElement("strong", null, "Production"), " pour les transactions r\xE9elles. Vos cl\xE9s d\xE9terminent l'environnement cibl\xE9.")), /*#__PURE__*/React.createElement(DocBlock, {
    id: "auth",
    title: "Authentification"
  }, /*#__PURE__*/React.createElement(P, null, "Authentifiez vos requ\xEAtes avec votre cl\xE9 secr\xE8te dans l'en-t\xEAte ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      background: 'var(--gray-100)',
      padding: '1px 6px',
      borderRadius: 5
    }
  }, "Authorization"), ". Ne partagez jamais vos cl\xE9s de production c\xF4t\xE9 client."), /*#__PURE__*/React.createElement(Code, null, `Authorization: Bearer emy_live_••••••••••••••••`)), /*#__PURE__*/React.createElement(DocBlock, {
    id: "env",
    title: "Environnements"
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Environnement"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Base URL"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Pr\xE9fixe de cl\xE9"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: td
  }, "Sandbox"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: 'var(--font-mono)'
    }
  }, "sandbox.api.emmany.com"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: 'var(--font-mono)'
    }
  }, "emy_test_")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: td
  }, "Production"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: 'var(--font-mono)'
    }
  }, "api.emmany.com"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: 'var(--font-mono)'
    }
  }, "emy_live_"))))), /*#__PURE__*/React.createElement(DocBlock, {
    id: "collect",
    title: "Encaisser un paiement"
  }, /*#__PURE__*/React.createElement(P, null, "Cr\xE9ez un paiement en envoyant le montant, la devise, le pays et le moyen de paiement. Le client re\xE7oit une demande de validation (par ex. push Mobile Money) puis vous \xEAtes notifi\xE9 via webhook."), /*#__PURE__*/React.createElement(Code, null, `curl -X POST https://api.emmany.com/v1/payments \\
  -H "Authorization: Bearer emy_live_••••" \\
  -d '{ "amount": 10000, "currency": "XAF",
        "country": "CG", "paymentMethod": "MTN_MOMO_CG",
        "customerPhone": "+242000000000" }'`)), /*#__PURE__*/React.createElement(DocBlock, {
    id: "status",
    title: "Statuts & cycle de vie"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 14
    }
  }, [['pending', 'bientot'], ['succeeded', 'actif'], ['failed', 'maintenance'], ['refunded', 'sandbox']].map(([s, k]) => /*#__PURE__*/React.createElement(StatusBadge, {
    key: s,
    kind: k
  }, s))), /*#__PURE__*/React.createElement(P, null, "Un paiement passe de ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "pending"), " \xE0 ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "succeeded"), " ou ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "failed"), ". Ne consid\xE9rez jamais un paiement comme r\xE9gl\xE9 tant que le webhook ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "payment.succeeded"), " n'est pas re\xE7u.")), /*#__PURE__*/React.createElement(DocBlock, {
    id: "webhooks",
    title: "Webhooks"
  }, /*#__PURE__*/React.createElement(P, null, "Emmany envoie des \xE9v\xE9nements sign\xE9s \xE0 votre ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "callbackUrl"), ". V\xE9rifiez la signature ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "Emmany-Signature"), " avant de traiter l'\xE9v\xE9nement."), /*#__PURE__*/React.createElement(Code, null, `{ "event": "payment.succeeded",
  "id": "pay_8f2c1a", "status": "succeeded" }`)), /*#__PURE__*/React.createElement(DocBlock, {
    id: "errors",
    title: "Codes d'erreur"
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Code"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Signification"))), /*#__PURE__*/React.createElement("tbody", null, [['400', 'Requête invalide — paramètre manquant ou mal formé'], ['401', 'Clé API invalide ou absente'], ['402', 'Paiement refusé par l\'opérateur'], ['429', 'Trop de requêtes — limite de débit atteinte'], ['500', 'Erreur serveur Emmany']].map(([c, m]) => /*#__PURE__*/React.createElement("tr", {
    key: c
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, c), /*#__PURE__*/React.createElement("td", {
    style: td
  }, m)))))), /*#__PURE__*/React.createElement(DocBlock, {
    id: "sdks",
    title: "SDKs & biblioth\xE8ques"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 12,
      marginBottom: 14
    }
  }, [['Node.js', 'terminal'], ['Python', 'terminal'], ['PHP', 'terminal'], ['Go', 'terminal']].map(([n, ic]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "em-card",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: '1px solid var(--border-subtle)',
      borderRadius: 10,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "box",
    size: 18,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, n))))), /*#__PURE__*/React.createElement(DocBlock, {
    id: "limits",
    title: "Limites & quotas"
  }, /*#__PURE__*/React.createElement(P, null, "Par d\xE9faut : 100 requ\xEAtes/seconde en production, 25 en sandbox. Contactez-nous pour relever ces limites selon votre volume."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('developers'),
    className: "em-btn em-btn-primary",
    style: {
      height: 46,
      padding: '0 22px',
      borderRadius: 8,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15
    }
  }, "Ouvrir la console d\xE9veloppeur")))))));
}
Object.assign(window, {
  Documentation
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Documentation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Gateway.jsx
try { (() => {
// Emmany — Page produit Gateway (maquette).
function GatewayArt() {
  const rails = [{
    ic: 'smartphone',
    label: 'Mobile Money',
    top: '20%',
    y: 70,
    d: 0
  }, {
    ic: 'credit-card',
    label: 'Cartes',
    top: '50%',
    y: 150,
    d: 0.5
  }, {
    ic: 'building-2',
    label: 'Virement',
    top: '80%',
    y: 230,
    d: 1
  }];
  const paths = [{
    id: 'gw1',
    d: 'M40,150 L150,150 Q210,150 250,72',
    dur: 2.4,
    delay: 0,
    c: 'var(--cyan-400)'
  }, {
    id: 'gw2',
    d: 'M40,150 L250,150',
    dur: 2.4,
    delay: 0.5,
    c: 'var(--color-primary)'
  }, {
    id: 'gw3',
    d: 'M40,150 L150,150 Q210,150 250,228',
    dur: 2.4,
    delay: 1,
    c: 'var(--cyan-400)'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 300,
      overflow: 'hidden'
    }
  }, [{
    x: 20,
    y: 10,
    s: 190,
    c: 'rgba(1,252,233,.20)',
    d: 0
  }, {
    x: 200,
    y: 30,
    s: 180,
    c: 'rgba(0,66,236,.18)',
    d: 1.2
  }, {
    x: 180,
    y: 160,
    s: 200,
    c: 'rgba(0,216,200,.16)',
    d: 0.6
  }, {
    x: 0,
    y: 150,
    s: 170,
    c: 'rgba(0,66,236,.14)',
    d: 2
  }].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: b.x,
      top: b.y,
      width: b.s,
      height: b.s,
      borderRadius: '50%',
      background: `radial-gradient(circle at 40% 35%, ${b.c}, transparent 68%)`,
      filter: 'blur(8px)',
      animation: `gwFloat ${6 + i}s var(--ease-in-out) ${b.d}s infinite`
    }
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 300 300",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("defs", null, paths.map(p => /*#__PURE__*/React.createElement("path", {
    key: p.id,
    id: p.id,
    d: p.d,
    fill: "none"
  }))), paths.map(p => /*#__PURE__*/React.createElement("path", {
    key: 'l' + p.id,
    d: p.d,
    fill: "none",
    stroke: "var(--blue-200)",
    strokeWidth: "2",
    strokeDasharray: "3 5",
    opacity: "0.7"
  })), paths.map(p => /*#__PURE__*/React.createElement("circle", {
    key: 't' + p.id,
    r: "5",
    fill: p.c
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: p.dur + 's',
    begin: p.delay + 's',
    repeatCount: "indefinite"
  }, /*#__PURE__*/React.createElement("mpath", {
    href: '#' + p.id
  })), /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: "0;1;1;0",
    keyTimes: "0;0.12;0.8;1",
    dur: p.dur + 's',
    begin: p.delay + 's',
    repeatCount: "indefinite"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--navy-900)',
      color: '#fff',
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 600,
      padding: '6px 10px',
      borderRadius: 8,
      boxShadow: 'var(--shadow-md)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'var(--cyan-400)'
    }
  }), "POST /payments")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 120,
      height: 120,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 112,
      height: 112,
      borderRadius: 999,
      border: '2px solid var(--cyan-400)',
      opacity: 0.35,
      animation: 'ping 3s var(--ease-out) infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 999,
      overflow: 'hidden',
      background: 'var(--color-primary)',
      boxShadow: 'var(--shadow-xl)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'gwFloat 5s var(--ease-in-out) infinite'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    style: {
      height: 40,
      filter: 'brightness(0) invert(1)'
    }
  }))), rails.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      position: 'absolute',
      right: 0,
      top: r.top,
      transform: 'translateY(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 10,
      padding: '7px 10px',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      borderRadius: 7,
      background: 'var(--blue-50)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.ic,
    size: 15,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, r.label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 16,
      height: 16,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 999,
      background: 'var(--success)',
      opacity: 0.18,
      animation: `ping 2.4s var(--ease-out) ${r.d}s infinite`
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    color: "var(--success)"
  })))));
}
function Gateway({
  onNav
}) {
  useLucide('gateway');
  const feats = [['wallet', 'Collecte de paiements', 'Initiez des paiements simples et sécurisés sur tous les canaux.'], ['git-branch', 'Orchestration Mobile Money', 'Routez automatiquement vers le meilleur canal pour maximiser le succès.'], ['list-checks', 'Suivi transactionnel', 'Suivez chaque transaction en temps réel avec des statuts détaillés.'], ['webhook', 'Webhooks marchands', 'Recevez des notifications en temps réel sur les événements clés.'], ['key-round', 'API Keys', 'Générez et gérez vos clés API en toute sécurité par projet et environnement.'], ['target', 'Sandbox', 'Testez vos intégrations sans risque dans un environnement dédié.'], ['layout-dashboard', 'Dashboard', 'Visualisez vos indicateurs clés avec des tableaux de bord intuitifs.'], ['download', 'Historique et exports', 'Exportez vos transactions et réconciliations en quelques clics.'], ['radar', 'Monitoring', 'Surveillez la performance de vos paiements et alertes en temps réel.']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '32px 0 56px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13.5,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer',
      color: 'var(--color-primary)',
      fontWeight: 600
    }
  }, "Produits"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 15,
    color: "var(--gray-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Emmany Gateway")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal in"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 42,
      fontWeight: 800,
      letterSpacing: '-.03em',
      lineHeight: 1.1,
      margin: 0,
      color: 'var(--ink)'
    }
  }, "Emmany Gateway, une API PSP pour orchestrer vos paiements num\xE9riques."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--ink-3)',
      margin: '20px 0 0',
      maxWidth: 460
    }
  }, "Une plateforme compl\xE8te et modulaire pour collecter, router, suivre et r\xE9concilier les paiements \xE0 grande \xE9chelle.")), /*#__PURE__*/React.createElement(GatewayArt, null)))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, feats.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "reveal em-card",
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 14,
      padding: 24,
      transitionDelay: `${i % 3 * 70}ms`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'var(--blue-50)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16.5,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: '8px 0 0'
    }
  }, d)))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      background: 'var(--gray-50)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: 'var(--ink)',
      margin: 0
    }
  }, "S\xE9curit\xE9 et tra\xE7abilit\xE9"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: '10px 0 0'
    }
  }, "Donn\xE9es chiffr\xE9es, journalisation compl\xE8te et conformit\xE9 aux exigences r\xE9glementaires. Vos paiements sont entre de bonnes mains.")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 72,
      height: 72,
      borderRadius: 18,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 34,
    color: "var(--cyan-500)"
  })))), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: 'center',
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      padding: '40px 24px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: 0
    }
  }, "Pr\xEAt \xE0 int\xE9grer Emmany Gateway ?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('contact'),
    className: "em-btn em-btn-primary",
    style: {
      height: 48,
      padding: '0 24px',
      borderRadius: 8,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15.5
    }
  }, "Cr\xE9er un compte"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('docs'),
    className: "em-btn em-btn-ghost",
    style: {
      height: 48,
      padding: '0 22px',
      borderRadius: 8,
      background: 'var(--surface)',
      color: 'var(--ink)',
      border: '1.5px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15.5
    }
  }, "Explorer la documentation")))));
}
Object.assign(window, {
  Gateway
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Gateway.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Home.jsx
try { (() => {
// Emmany — Accueil (maquette) avec card animée, sélecteur de jours et compteurs.
const {
  useState: useStateH
} = React;
const RANGES = {
  '24 heures': {
    pts: [60, 30, 68, 26, 72, 34, 80, 28, 62, 40, 74, 44, 88, 50, 82],
    vol: 8420600,
    dv: 4.2,
    tx: 1204,
    dtx: 3.1,
    sr: 98.9,
    dsr: 0.4,
    axis: ['-24 h', '-12 h', 'Maintenant'],
    tip: 'Maintenant'
  },
  '7 derniers jours': {
    pts: [34, 20, 46, 30, 52, 28, 60, 42, 55, 38, 70, 50, 64, 74, 88],
    vol: 256780300,
    dv: 18.6,
    tx: 24763,
    dtx: 16.2,
    sr: 98.6,
    dsr: 2.1,
    axis: ['J-7', 'J-4', "Aujourd'hui"],
    tip: "Auj."
  },
  '30 derniers jours': {
    pts: [30, 34, 40, 38, 48, 52, 60, 58, 66, 70, 76, 80, 84, 90, 96],
    vol: 1024300000,
    dv: 22.4,
    tx: 98420,
    dtx: 19.8,
    sr: 98.4,
    dsr: 1.7,
    axis: ['J-30', 'J-15', "Aujourd'hui"],
    tip: "Auj."
  },
  '90 derniers jours': {
    pts: [20, 48, 26, 60, 34, 70, 30, 78, 44, 86, 40, 92, 56, 96, 74],
    vol: 3180900000,
    dv: 31.2,
    tx: 291540,
    dtx: 27.5,
    sr: 98.1,
    dsr: 3.4,
    axis: ['J-90', 'J-45', "Aujourd'hui"],
    tip: "Auj."
  }
};
function LineChart({
  pts,
  k,
  tip,
  axis
}) {
  const w = 380,
    h = 150;
  const max = Math.max(...pts),
    min = Math.min(...pts),
    span = max - min || 1;
  const x = i => i / (pts.length - 1) * w;
  const y = v => 18 + (1 - (v - min) / span) * (h - 42);
  const line = pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const area = `${line} L${w},${h} L0,${h} Z`;
  const lx = x(pts.length - 1),
    ly = y(pts[pts.length - 1]);
  return /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "lc",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "var(--color-primary)",
    stopOpacity: "0.26"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "var(--color-primary)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: ly,
    x2: w,
    y2: ly,
    stroke: "var(--border-default)",
    strokeWidth: "1",
    strokeDasharray: "4 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#lc)",
    style: {
      animation: 'fadeUp .8s var(--ease-out) both'
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    pathLength: "100",
    fill: "none",
    stroke: "var(--color-primary)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      strokeDasharray: 100,
      animation: 'drawLine 1.4s var(--ease-out) forwards'
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: lx,
    cy: ly,
    r: "11",
    fill: "var(--color-primary)",
    opacity: "0.18",
    style: {
      animation: 'devPulse 2s var(--ease-in-out) infinite',
      transformOrigin: `${lx}px ${ly}px`
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: lx,
    cy: ly,
    r: "5",
    fill: "var(--color-primary)",
    stroke: "var(--surface)",
    strokeWidth: "2"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '84%',
      top: -4,
      transform: 'translateX(-50%)',
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      borderRadius: 8,
      padding: '3px 9px',
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--ink)',
      animation: 'fadeUp .5s var(--ease-out) .3s both'
    }
  }, tip), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8,
      fontSize: 11,
      letterSpacing: '.02em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, axis.map(a => /*#__PURE__*/React.createElement("span", {
    key: a
  }, a))));
}
function TxOverview() {
  const [range, setRange] = useStateH('7 derniers jours');
  const [open, setOpen] = useStateH(false);
  const d = RANGES[range];
  return /*#__PURE__*/React.createElement("div", {
    className: "reveal in",
    style: {
      background: 'var(--surface)',
      borderRadius: 18,
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xl)',
      padding: 26,
      aspectRatio: '1 / 1',
      display: 'flex',
      flexDirection: 'column',
      animation: 'floatY 7s var(--ease-in-out) infinite'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "Aper\xE7u des transactions"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    onBlur: () => setTimeout(() => setOpen(false), 150),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--ink-3)',
      border: '1px solid var(--border-default)',
      borderRadius: 8,
      padding: '6px 11px',
      background: 'var(--surface)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, range, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14,
    color: "var(--gray-400)"
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '110%',
      right: 0,
      zIndex: 20,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 10,
      boxShadow: 'var(--shadow-lg)',
      padding: 6,
      minWidth: 180,
      animation: 'fadeUp .18s var(--ease-out) both'
    }
  }, Object.keys(RANGES).map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    onMouseDown: () => {
      setRange(r);
      setOpen(false);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: '8px 12px',
      borderRadius: 7,
      border: 'none',
      background: r === range ? 'var(--blue-50)' : 'transparent',
      color: r === range ? 'var(--color-primary)' : 'var(--ink-2)',
      fontSize: 13.5,
      fontWeight: r === range ? 600 : 500,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, r))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, "Volume total"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    key: range + 'v',
    value: d.vol
  }), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "XAF")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--success)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 13,
    color: "var(--success)"
  }), d.dv, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      margin: '16px 0 16px'
    }
  }, /*#__PURE__*/React.createElement(LineChart, {
    pts: d.pts,
    k: range,
    tip: d.tip,
    axis: d.axis
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18,
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, "Transactions r\xE9ussies"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 21,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    key: range + 't',
    value: d.tx
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--success)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 12,
    color: "var(--success)"
  }), d.dtx, "%"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, "Taux de succ\xE8s"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 21,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    key: range + 's',
    value: d.sr,
    decimals: 1,
    suffix: "%"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--success)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 12,
    color: "var(--success)"
  }), d.dsr, "%")))));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0 40px',
      background: 'radial-gradient(1200px 400px at 80% -50px, var(--blue-50), transparent)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal in"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--color-primary)',
      background: 'var(--blue-50)',
      border: '1px solid var(--blue-100)',
      borderRadius: 999,
      padding: '5px 12px',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: 'var(--success)'
    }
  }), "En service dans 12 march\xE9s \xB7 40+ moyens de paiement"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 46,
      fontWeight: 800,
      letterSpacing: '-.03em',
      lineHeight: 1.1,
      margin: 0,
      color: 'var(--ink)'
    }
  }, "L'infrastructure de paiement con\xE7ue pour connecter les entreprises aux moyens de paiement ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "africains"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--ink-3)',
      margin: '20px 0 0',
      maxWidth: 480
    }
  }, "Emmany aide les commer\xE7ants, plateformes et d\xE9veloppeurs \xE0 int\xE9grer, orchestrer et suivre les paiements via une API PSP s\xE9curis\xE9e, fiable et \xE9volutive."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('contact'),
    className: "em-btn em-btn-primary",
    style: {
      height: 48,
      padding: '0 24px',
      borderRadius: 8,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15.5
    }
  }, "Cr\xE9er un compte"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('gateway'),
    className: "em-btn em-btn-ghost",
    style: {
      height: 48,
      padding: '0 22px',
      borderRadius: 8,
      background: 'var(--surface)',
      color: 'var(--ink)',
      border: '1.5px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15.5
    }
  }, "D\xE9couvrir Emmany Gateway"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, [{
    ic: 'receipt',
    left: -34,
    top: 40,
    d: 0
  }, {
    ic: 'file-text',
    left: -42,
    top: 330,
    d: 1.1
  }, {
    ic: 'banknote',
    right: -34,
    top: 60,
    d: 0.6
  }, {
    ic: 'file-check',
    right: -42,
    top: 310,
    d: 1.7
  }].map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: f.ic,
    style: {
      position: 'absolute',
      left: f.left,
      right: f.right,
      top: f.top,
      width: 46,
      height: 46,
      borderRadius: 13,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 3,
      animation: `floatY ${4.5 + i}s var(--ease-in-out) ${f.d}s infinite`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.ic,
    size: 21,
    color: "var(--color-primary)"
  }))), /*#__PURE__*/React.createElement(TxOverview, null)))));
}
function StatBand() {
  const stats = [[240000000, 'Volume traité par an', 'XAF', 0], [24763, 'Transactions / jour', '', 0], [40, 'Moyens de paiement', '+', 0], [99.9, 'Disponibilité SLA', '%', 1]];
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 1,
      background: 'var(--border-subtle)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      overflow: 'hidden'
    }
  }, stats.map(([v, l, suf, dec], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: 'var(--surface)',
      padding: '26px 22px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--color-primary)'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    value: v,
    decimals: dec,
    suffix: suf === 'XAF' ? '' : suf
  }), suf === 'XAF' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, " XAF")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-3)',
      marginTop: 6
    }
  }, l)))));
}
function EnvCards() {
  const cards = [['production', 'var(--success)', 'Production', 'Infrastructure en production', 'Haute disponibilité & SLA 99.9%'], ['sandbox', 'var(--warning)', 'Sandbox', 'Testez sans risque', 'Environnement isolé & sécurisé']];
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 8,
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, cards.map(([k, c, t, d1, d2], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "reveal em-card",
    style: {
      background: 'var(--gray-50)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 14,
      padding: '20px 24px',
      transitionDelay: `${i * 80}ms`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 999,
      background: c
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, t)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-3)',
      marginTop: 8
    }
  }, d1), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, d2)))));
}
function WhyEmmany() {
  const feats = [['network', 'Connectivité africaine', 'Accédez aux principaux moyens de paiement locaux à travers le continent.'], ['git-branch', 'Orchestration intelligente', 'Routage dynamique pour maximiser le succès de chaque paiement.'], ['shield-check', 'Sécurité & conformité', 'Données chiffrées, API sécurisées, et conformité réglementaire.'], ['activity', 'Traçabilité complète', 'Suivez chaque transaction en temps réel avec des rapports détaillés.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h2", {
    className: "reveal",
    style: {
      textAlign: 'center',
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: '0 0 36px'
    }
  }, "Pourquoi choisir Emmany ?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 22
    }
  }, feats.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "reveal em-card",
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 14,
      padding: 22,
      transitionDelay: `${i * 90}ms`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'var(--blue-50)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16.5,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: '8px 0 0'
    }
  }, d))))));
}
function PaymentMethods() {
  const m = [['smartphone', 'Mobile Money', 'MTN, Airtel, Moov…'], ['credit-card', 'Cartes & Wallets', 'Visa, Mastercard, Wave'], ['building-2', 'Virements bancaires', 'Comptes bancaires locaux'], ['ellipsis', 'Autres méthodes', 'USSD, QR, et plus']];
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      background: 'var(--gray-50)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      padding: '28px 24px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '0 0 22px'
    }
  }, "Moyens de paiement disponibles"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, m.map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "em-card",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 12,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'var(--blue-50)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 19,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, d)))))));
}
function UseCases() {
  const cases = [['shopping-bag', 'E-commerce & marketplaces', 'Encaissez en mobile money et carte, gérez les remboursements et les paiements fractionnés.'], ['repeat', 'Abonnements & SaaS', 'Prélèvements récurrents, relances automatiques et gestion fine des échecs.'], ['banknote', 'Versements & payouts', 'Payez marchands, chauffeurs et fournisseurs en masse, en temps réel.'], ['landmark', 'Banques & institutions', 'Connectez de nouveaux canaux de paiement sans refondre votre core banking.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '16px 0 40px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto 32px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Cas d'usage"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: '12px 0 0'
    }
  }, "Une seule int\xE9gration, tous vos flux")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 18
    }
  }, cases.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "reveal em-card",
    style: {
      display: 'flex',
      gap: 16,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 14,
      padding: 22,
      transitionDelay: `${i * 80}ms`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 46,
      height: 46,
      borderRadius: 12,
      background: 'var(--gradient-brand)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16.5,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: '6px 0 0'
    }
  }, d)))))));
}
function DevBand() {
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--navy-900)',
      borderRadius: 16,
      padding: 32,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -30,
      bottom: -30,
      width: 180,
      height: 180,
      backgroundImage: `url(${MARK})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      opacity: .08,
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: '#fff',
      margin: 0
    }
  }, "Con\xE7ue pour les d\xE9veloppeurs"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 20
    }
  }, ['API RESTful simple et documentée', 'Webhooks en temps réel', 'SDKs et bibliothèques disponibles'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      color: '#dfe7f2',
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--cyan-400)"
  }), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#020c1f',
      border: '1px solid var(--navy-700)',
      borderRadius: 12,
      padding: '16px 18px',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.8,
      color: '#e6ecf5'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#7ee3d8'
    }
  }, "POST ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "/v1/payments")), /*#__PURE__*/React.createElement("div", null, '{'), /*#__PURE__*/React.createElement("div", null, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"amount\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ffd479'
    }
  }, "10000"), ","), /*#__PURE__*/React.createElement("div", null, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"currency\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#7ee3d8'
    }
  }, "\"XAF\""), ","), /*#__PURE__*/React.createElement("div", null, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"country\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#7ee3d8'
    }
  }, "\"CG\"")), /*#__PURE__*/React.createElement("div", null, '}'))));
}
function SandboxBanner({
  onNav
}) {
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      background: 'var(--warning-soft)',
      border: '1px solid #f4dca6',
      borderRadius: 12,
      padding: '18px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 22,
    color: "var(--warning)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15.5,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "Testez gratuitement avec notre sandbox"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-3)'
    }
  }, "Acc\xE9dez \xE0 l'environnement de test et int\xE9grez en toute confiance."))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('developers'),
    className: "em-btn em-btn-primary",
    style: {
      flexShrink: 0,
      height: 44,
      padding: '0 20px',
      borderRadius: 8,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14.5
    }
  }, "Activer la sandbox gratuite")));
}
function Home({
  onNav
}) {
  useLucide('home');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(StatBand, null), /*#__PURE__*/React.createElement(EnvCards, null), /*#__PURE__*/React.createElement(WhyEmmany, null), /*#__PURE__*/React.createElement(PaymentMethods, null), /*#__PURE__*/React.createElement(UseCases, null), /*#__PURE__*/React.createElement(DevBand, null), /*#__PURE__*/React.createElement(SandboxBanner, {
    onNav: onNav
  }));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Pricing.jsx
try { (() => {
// Emmany — Tarifs & frais (maquette) : contenu distinct par onglet + estimateur interactif.
const {
  useState: useStatePr
} = React;

// Moyens de paiement + frais réels par pays/opérateur — repris de « Pays & frais ».
// { n: nom, op: frais opérateur (%), psp: frais PSP Emmany (%) }. op:0 = frais fixe (virement).
const COUNTRY_METHODS = {
  'République du Congo (CG)': [{
    n: 'MTN Mobile Money Congo',
    op: 1.50,
    psp: 0.70
  }, {
    n: 'Airtel Money Congo',
    op: 1.50,
    psp: 0.70
  }, {
    n: 'Virement bancaire (Banques locales)',
    op: 0,
    psp: 0.50
  }, {
    n: 'Cartes (Visa/Mastercard)',
    op: 2.50,
    psp: 0.80
  }],
  'Cameroun (CM)': [{
    n: 'Orange Money Cameroun',
    op: 1.55,
    psp: 0.75
  }, {
    n: 'MTN Mobile Money Cameroun',
    op: 1.60,
    psp: 0.75
  }, {
    n: 'Virement bancaire (Banques locales)',
    op: 0,
    psp: 0.50
  }, {
    n: 'Cartes (Visa/Mastercard)',
    op: 2.50,
    psp: 0.80
  }],
  'Gabon (GA)': [{
    n: 'Airtel Money Gabon',
    op: 1.60,
    psp: 0.75
  }, {
    n: 'Moov Money Gabon',
    op: 1.65,
    psp: 0.75
  }, {
    n: 'Virement bancaire (Banques locales)',
    op: 0,
    psp: 0.50
  }, {
    n: 'Cartes (Visa/Mastercard)',
    op: 2.50,
    psp: 0.80
  }],
  'Bénin (BJ)': [{
    n: 'MTN Mobile Money Bénin',
    op: 1.50,
    psp: 0.70
  }, {
    n: 'Moov Money Bénin',
    op: 1.55,
    psp: 0.70
  }, {
    n: 'Virement bancaire (Banques locales)',
    op: 0,
    psp: 0.50
  }, {
    n: 'Cartes (Visa/Mastercard)',
    op: 2.50,
    psp: 0.80
  }],
  'Togo (TG)': [{
    n: 'T-Money (Togocom)',
    op: 1.55,
    psp: 0.70
  }, {
    n: 'Moov Money (Flooz)',
    op: 1.55,
    psp: 0.70
  }, {
    n: 'Virement bancaire (Banques locales)',
    op: 0,
    psp: 0.50
  }, {
    n: 'Cartes (Visa/Mastercard)',
    op: 2.50,
    psp: 0.80
  }],
  'Sénégal (SN)': [{
    n: 'Orange Money Sénégal',
    op: 1.50,
    psp: 0.65
  }, {
    n: 'Wave Sénégal',
    op: 1.00,
    psp: 0.60
  }, {
    n: 'Virement bancaire (Banques locales)',
    op: 0,
    psp: 0.50
  }, {
    n: 'Cartes (Visa/Mastercard)',
    op: 2.50,
    psp: 0.80
  }],
  "Côte d'Ivoire (CI)": [{
    n: 'Orange Money Côte d\'Ivoire',
    op: 1.50,
    psp: 0.65
  }, {
    n: 'MTN Mobile Money Côte d\'Ivoire',
    op: 1.50,
    psp: 0.70
  }, {
    n: 'Virement bancaire (Banques locales)',
    op: 0,
    psp: 0.50
  }, {
    n: 'Cartes (Visa/Mastercard)',
    op: 2.50,
    psp: 0.80
  }]
};
function Estimator() {
  const [amount, setAmount] = useStatePr(100000);
  const [country, setCountry] = useStatePr('République du Congo (CG)');
  const [method, setMethod] = useStatePr(COUNTRY_METHODS['République du Congo (CG)'][0].n);
  const methods = COUNTRY_METHODS[country] || [];
  const onCountry = e => {
    const c = e.target.value;
    setCountry(c);
    setMethod((COUNTRY_METHODS[c] || [{}])[0].n);
  };
  const sel = methods.find(m => m.n === method) || methods[0] || {
    op: 0,
    psp: 0
  };
  const opRate = sel.op / 100,
    pspRate = sel.psp / 100;
  const pct = v => v.toFixed(2) + '%';
  const fmt = n => Math.round(n).toLocaleString('fr-FR').replace(/\u202f/g, ',');
  const op = amount * opRate,
    psp = amount * pspRate,
    net = amount - op - psp;
  const inp = {
    width: '100%',
    height: 44,
    padding: '0 12px',
    border: '1.5px solid var(--border-default)',
    borderRadius: 8,
    fontFamily: 'var(--font-sans)',
    fontSize: 14.5,
    color: 'var(--ink)',
    outline: 'none',
    background: 'var(--surface)',
    boxSizing: 'border-box'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gray-50)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--ink)',
      marginBottom: 18
    }
  }, "Estimez vos frais"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      gap: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, "Pays"), /*#__PURE__*/React.createElement("select", {
    value: country,
    onChange: onCountry,
    style: {
      ...inp,
      appearance: 'none'
    }
  }, Object.keys(COUNTRY_METHODS).map(c => /*#__PURE__*/React.createElement("option", {
    key: c
  }, c)))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, "Moyen de paiement"), /*#__PURE__*/React.createElement("select", {
    value: method,
    onChange: e => setMethod(e.target.value),
    style: {
      ...inp,
      appearance: 'none'
    }
  }, methods.map(m => /*#__PURE__*/React.createElement("option", {
    key: m.n
  }, m.n)))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, "Montant de transaction"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: amount,
    onChange: e => setAmount(Number(e.target.value) || 0),
    style: inp
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 34,
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, "XAF")))), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 22,
    color: "var(--gray-400)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Frais op\xE9rateur"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, fmt(op), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "XAF"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, sel.op ? '(' + pct(sel.op) + ')' : '(frais fixe)'))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Frais PSP"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, fmt(psp), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "XAF"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-primary)'
    }
  }, "(", pct(sel.psp), ")"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Montant net estim\xE9"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--success)'
    }
  }, fmt(net), " XAF")))));
}
function RateTable({
  head,
  rows
}) {
  const th = {
    textAlign: 'left',
    fontSize: 11.5,
    fontWeight: 600,
    letterSpacing: '.04em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    padding: '0 14px 12px'
  };
  const td = {
    padding: '13px 14px',
    fontSize: 14,
    color: 'var(--ink-2)',
    borderTop: '1px solid var(--border-subtle)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      padding: 22,
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: 460
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, head.map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      ...th,
      textAlign: i === 0 ? 'left' : 'right'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    className: "em-row"
  }, r.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      ...td,
      textAlign: ci === 0 ? 'left' : 'right',
      fontWeight: ci === 0 ? 600 : 500,
      color: ci === 0 ? 'var(--ink)' : ci === r.length - 1 ? 'var(--color-primary)' : 'var(--ink-2)'
    }
  }, c)))))));
}
const TABS = [{
  label: 'Frais PSP',
  pct: '0.50% – 0.80%',
  cap: 'Selon le moyen de paiement · plafond min. 50 XAF',
  color: 'var(--color-primary)',
  desc: 'La commission Emmany prélevée sur chaque transaction réussie. Le taux varie entre 0.50% et 0.80% selon le moyen de paiement.',
  bullets: ['Appliqué sur le montant de la transaction', 'Pas de frais cachés', 'Facturation en XAF'],
  right: 'estimator'
}, {
  label: 'Frais opérateur',
  pct: '1.50% – 2.50%',
  cap: 'Selon l\'opérateur & le canal',
  color: 'var(--cyan-600)',
  desc: 'Frais reversés aux opérateurs Mobile Money et réseaux de cartes. Variables par pays.',
  bullets: ['Mobile Money : 1.50% en moyenne', 'Cartes Visa/Mastercard : 2.50%', 'Virement bancaire : frais fixes'],
  right: 'estimator'
}, {
  label: 'Frais par pays',
  pct: '',
  cap: '',
  desc: '',
  bullets: [],
  right: 'country'
}, {
  label: 'Frais par moyen de paiement',
  pct: '',
  cap: '',
  desc: '',
  bullets: [],
  right: 'method'
}];
function Pricing() {
  useLucide('pricing');
  const [tab, setTab] = useStatePr(0);
  const t = TABS[tab];
  const countryRows = [['République du Congo', '0.70%', '1.50%'], ['Cameroun', '0.75%', '1.60%'], ['Gabon', '0.75%', '1.65%'], ['Bénin', '0.70%', '1.50%'], ['Togo', '0.70%', '1.55%'], ['Sénégal', '0.65%', '1.50%'], ["Côte d'Ivoire", '0.65%', '1.50%']];
  const methodRows = [['MTN / Airtel / Moov Money', '0.70%', '1.50%'], ['Wave', '0.60%', '1.00%'], ['Cartes Visa / Mastercard', '0.80%', '2.50%'], ['Virement bancaire local', '0.50%', 'Fixe'], ['USSD / QR', '0.70%', '1.20%']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '48px 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "reveal in",
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 36px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 34,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: 0
    }
  }, "Tarification transparente, sans surprise"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--ink-3)',
      margin: '12px 0 0'
    }
  }, "Des frais clairs et comp\xE9titifs pour tous vos paiements.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 36,
      flexWrap: 'wrap'
    }
  }, TABS.map((x, i) => /*#__PURE__*/React.createElement("button", {
    key: x.label,
    className: "em-navlink",
    onClick: () => setTab(i),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      fontWeight: 600,
      padding: '12px 18px',
      color: tab === i ? 'var(--color-primary)' : 'var(--ink-3)',
      borderBottom: `2px solid ${tab === i ? 'var(--color-primary)' : 'transparent'}`,
      marginBottom: -1
    }
  }, x.label))), /*#__PURE__*/React.createElement("div", {
    key: tab,
    style: {
      display: 'grid',
      gridTemplateColumns: t.right === 'estimator' ? '0.85fr 1.15fr' : '0.85fr 1.15fr',
      gap: 24,
      alignItems: 'start',
      animation: 'fadeUp .35s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      padding: 28
    }
  }, t.pct ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, t.label, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, "(par transaction)")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      letterSpacing: '-.03em',
      color: t.color,
      margin: '8px 0 4px'
    }
  }, t.pct), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tag",
    size: 14,
    color: "var(--text-muted)"
  }), t.cap), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: '0 0 18px'
    }
  }, t.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, t.bullets.map(b => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 14,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17,
    color: "var(--success)"
  }), b)))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, t.label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: '10px 0 18px'
    }
  }, tab === 2 ? 'Les taux PSP et opérateur varient selon le marché. Voici les grilles indicatives par pays couvert par Emmany.' : "Chaque moyen de paiement a sa propre grille. Comparez les frais PSP et opérateur par méthode."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, ['Frais PSP dès 0.50%', 'Frais opérateur transparents', 'Aucun frais d\'installation'].map(b => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 14,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17,
    color: "var(--success)"
  }), b))))), t.right === 'estimator' && /*#__PURE__*/React.createElement(Estimator, null), t.right === 'country' && /*#__PURE__*/React.createElement(RateTable, {
    head: ['Pays', 'Frais PSP', 'Frais opérateur'],
    rows: countryRows
  }), t.right === 'method' && /*#__PURE__*/React.createElement(RateTable, {
    head: ['Moyen de paiement', 'Frais PSP', 'Frais opérateur'],
    rows: methodRows
  })), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      marginTop: 24,
      background: 'var(--gray-50)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 12,
      padding: '14px 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 18,
    color: "var(--gray-500)",
    style: {
      marginTop: 1,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Ces frais sont indicatifs et peuvent varier selon votre contrat marchand, l'op\xE9rateur et le pays. Les frais op\xE9rateur peuvent \xE9galement inclure la TVA le cas \xE9ch\xE9ant."))));
}
Object.assign(window, {
  Pricing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Pricing.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

})();

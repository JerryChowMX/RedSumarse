/* @ds-bundle: {"format":3,"namespace":"SUMARSEDesignSystem_6dc1cb","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ProgressBar","sourcePath":"components/surfaces/ProgressBar.jsx"},{"name":"Stat","sourcePath":"components/surfaces/Stat.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"30f033e2ebf0","components/core/Badge.jsx":"b5ecc3e93a53","components/core/Button.jsx":"ace99808bbc4","components/core/IconButton.jsx":"a13fc81ae152","components/core/Tag.jsx":"c4bdfccc6287","components/feedback/Alert.jsx":"eaef312db517","components/forms/Checkbox.jsx":"ba2840050441","components/forms/Input.jsx":"90f131b137b0","components/forms/Radio.jsx":"b848e6f96432","components/forms/Select.jsx":"39cd9dcd28b3","components/forms/Switch.jsx":"7b1732ea9835","components/navigation/Tabs.jsx":"6f3784f74288","components/surfaces/Card.jsx":"88ba7ec44ec7","components/surfaces/ProgressBar.jsx":"152e14ce4cc2","components/surfaces/Stat.jsx":"b82417d8b4bf","ui_kits/website/Brand.jsx":"5f970a4c5772","ui_kits/website/DonarScreen.jsx":"4967d9e8c8c9","ui_kits/website/Footer.jsx":"9135b3d3e17a","ui_kits/website/Header.jsx":"be740ae74273","ui_kits/website/HomeScreen.jsx":"1a833f91a3b2","ui_kits/website/Icons.jsx":"986005a1cec6","ui_kits/website/NosotrosScreen.jsx":"06d8dc0a6ca5","ui_kits/website/ProgramsScreen.jsx":"0ea9513949ff"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SUMARSEDesignSystem_6dc1cb = window.SUMARSEDesignSystem_6dc1cb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SUMA RSE Avatar — initials or image, with brand-tinted fallback.
 */
function Avatar({
  src,
  name = '',
  size = 'md',
  style,
  ...rest
}) {
  const dims = {
    xs: 24,
    sm: 32,
    md: 44,
    lg: 56,
    xl: 72
  }[size] || 44;
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
  const fs = Math.round(dims * 0.4);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      flex: 'none',
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--purple-100)',
      color: 'var(--purple-700)',
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: fs,
      lineHeight: 1,
      border: '1.5px solid var(--surface-card)',
      boxShadow: 'var(--shadow-xs)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '·');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SUMA RSE Badge — small status/category label with soft tonal fills.
 */
function Badge({
  variant = 'neutral',
  size = 'md',
  dot = false,
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      bg: 'var(--neutral-100)',
      color: 'var(--neutral-700)',
      dot: 'var(--neutral-500)'
    },
    brand: {
      bg: 'var(--purple-50)',
      color: 'var(--purple-700)',
      dot: 'var(--purple-600)'
    },
    accent: {
      bg: 'var(--yellow-100)',
      color: 'var(--yellow-800)',
      dot: 'var(--yellow-600)'
    },
    success: {
      bg: 'var(--success-soft)',
      color: 'var(--success)',
      dot: 'var(--success)'
    },
    warning: {
      bg: 'var(--warning-soft)',
      color: 'var(--warning)',
      dot: 'var(--warning)'
    },
    danger: {
      bg: 'var(--danger-soft)',
      color: 'var(--danger)',
      dot: 'var(--danger)'
    },
    info: {
      bg: 'var(--info-soft)',
      color: 'var(--info)',
      dot: 'var(--info)'
    }
  };
  const t = tones[variant] || tones.neutral;
  const pad = size === 'sm' ? '2px 8px' : '4px 11px';
  const fs = size === 'sm' ? 'var(--size-xs)' : 'var(--size-sm)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: pad,
      fontFamily: 'var(--font-text)',
      fontSize: fs,
      fontWeight: 600,
      lineHeight: 1.2,
      color: t.color,
      background: t.bg,
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: t.dot
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SUMA RSE Button — primary (purple), CTA (yellow), secondary (outline), ghost.
 * Self-contained: inline styles driven by design tokens; hover/active via state.
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  href,
  leadingIcon,
  trailingIcon,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '8px 14px',
      font: 'var(--size-sm)',
      radius: 'var(--radius-md)',
      gap: '6px'
    },
    md: {
      padding: '11px 20px',
      font: 'var(--size-base)',
      radius: 'var(--radius-md)',
      gap: '8px'
    },
    lg: {
      padding: '15px 28px',
      font: 'var(--size-md)',
      radius: 'var(--radius-md)',
      gap: '10px'
    }
  };
  const s = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      bg: active ? 'var(--btn-primary-bg-active)' : hover ? 'var(--btn-primary-bg-hover)' : 'var(--btn-primary-bg)',
      color: 'var(--btn-primary-text)',
      border: 'transparent',
      shadow: hover ? 'var(--shadow-brand)' : 'var(--shadow-xs)'
    },
    cta: {
      bg: active ? 'var(--cta-bg-active)' : hover ? 'var(--cta-bg-hover)' : 'var(--cta-bg)',
      color: 'var(--cta-text)',
      border: 'transparent',
      shadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)'
    },
    secondary: {
      bg: hover ? 'var(--purple-50)' : 'transparent',
      color: 'var(--purple-700)',
      border: 'var(--purple-300)',
      shadow: 'none'
    },
    ghost: {
      bg: hover ? 'var(--surface-soft)' : 'transparent',
      color: 'var(--text-body)',
      border: 'transparent',
      shadow: 'none'
    }
  };
  const p = palettes[variant] || palettes.primary;
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    width: fullWidth ? '100%' : 'auto',
    padding: s.padding,
    fontFamily: 'var(--font-text)',
    fontSize: s.font,
    fontWeight: 700,
    lineHeight: 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    color: p.color,
    background: p.bg,
    border: `1.5px solid ${p.border}`,
    borderRadius: s.radius,
    boxShadow: p.shadow,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transform: active && !disabled ? 'translateY(1px)' : 'none',
    transition: 'background var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onClick
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, leadingIcon, children && /*#__PURE__*/React.createElement("span", null, children), trailingIcon);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: baseStyle
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: baseStyle
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SUMA RSE IconButton — square/round button for a single icon.
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  shape = 'rounded',
  disabled = false,
  'aria-label': ariaLabel,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const icon = {
    sm: 16,
    md: 20,
    lg: 22
  }[size] || 20;
  const palettes = {
    primary: {
      bg: hover ? 'var(--btn-primary-bg-hover)' : 'var(--btn-primary-bg)',
      color: 'var(--btn-primary-text)',
      border: 'transparent'
    },
    soft: {
      bg: hover ? 'var(--purple-100)' : 'var(--purple-50)',
      color: 'var(--purple-700)',
      border: 'transparent'
    },
    ghost: {
      bg: hover ? 'var(--surface-soft)' : 'transparent',
      color: 'var(--text-body)',
      border: 'transparent'
    },
    outline: {
      bg: hover ? 'var(--surface-soft)' : 'transparent',
      color: 'var(--text-body)',
      border: 'var(--border-default)'
    }
  };
  const p = palettes[variant] || palettes.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      padding: 0,
      color: p.color,
      background: p.bg,
      border: `1.5px solid ${p.border}`,
      borderRadius: shape === 'circle' ? '50%' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: icon,
      height: icon
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SUMA RSE Tag — interactive chip for filters / categories. Optionally removable.
 */
function Tag({
  selected = false,
  onRemove,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 12px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--size-sm)',
      fontWeight: 600,
      lineHeight: 1.2,
      color: selected ? 'var(--purple-700)' : 'var(--text-body)',
      background: selected ? 'var(--purple-50)' : hover && interactive ? 'var(--surface-soft)' : 'var(--surface-card)',
      border: `1.5px solid ${selected ? 'var(--purple-300)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-pill)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Quitar",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'inline-flex',
      color: 'var(--text-muted)',
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SUMA RSE Alert — inline feedback banner with tone, title and optional dismiss.
 */
function Alert({
  variant = 'info',
  title,
  icon,
  onClose,
  children,
  style,
  ...rest
}) {
  const tones = {
    info: {
      bg: 'var(--info-soft)',
      border: 'var(--info)',
      text: 'var(--info)'
    },
    success: {
      bg: 'var(--success-soft)',
      border: 'var(--success)',
      text: 'var(--success)'
    },
    warning: {
      bg: 'var(--warning-soft)',
      border: 'var(--warning)',
      text: 'var(--warning)'
    },
    danger: {
      bg: 'var(--danger-soft)',
      border: 'var(--danger)',
      text: 'var(--danger)'
    },
    brand: {
      bg: 'var(--purple-50)',
      border: 'var(--purple-500)',
      text: 'var(--purple-700)'
    }
  };
  const t = tones[variant] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      fontFamily: 'var(--font-text)',
      background: t.bg,
      borderRadius: 'var(--radius-md)',
      borderLeft: `4px solid ${t.border}`,
      color: 'var(--text-body)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: t.text,
      flex: 'none',
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 'var(--size-base)',
      color: t.text,
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-sm)',
      color: 'var(--text-body)',
      lineHeight: 1.5
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 18,
      lineHeight: 1,
      padding: 0,
      flex: 'none'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SUMA RSE Checkbox — accessible custom checkbox with label.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const cid = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--size-base)',
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cid,
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
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: on ? 'var(--purple-600)' : 'var(--surface-card)',
      border: `1.5px solid ${on ? 'var(--purple-600)' : 'var(--border-strong)'}`,
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--canvas-white)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SUMA RSE Input — text field with optional label, hint, error and leading icon.
 */
function Input({
  label,
  hint,
  error,
  leadingIcon,
  id,
  size = 'md',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const pad = size === 'sm' ? '8px 12px' : '11px 14px';
  const fs = size === 'sm' ? 'var(--size-sm)' : 'var(--size-base)';
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--size-sm)',
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: pad,
      background: 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      flex: 'none'
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: fs,
      color: 'var(--text-body)',
      lineHeight: 1.4
    }
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SUMA RSE Radio — single radio control with label (use inside a shared `name` group).
 */
function Radio({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  name,
  value,
  style,
  ...rest
}) {
  const rid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--size-base)',
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    className: "suma-radio",
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-strong)',
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "suma-radio-dot",
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--purple-600)',
      transform: 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("style", null, `
        .suma-radio:checked + span { border-color: var(--purple-600); }
        .suma-radio:checked + span .suma-radio-dot { transform: scale(1); }
      `));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SUMA RSE Select — native select styled to match the form system.
 */
function Select({
  label,
  hint,
  error,
  id,
  options = [],
  children,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || React.useId();
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: 'var(--size-sm)',
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      padding: '11px 38px 11px 14px',
      fontFamily: 'inherit',
      fontSize: 'var(--size-base)',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      cursor: 'pointer',
      lineHeight: 1.4,
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }), options.length ? options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  }) : children), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 12,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SUMA RSE Switch — toggle for on/off settings.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const sid = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--size-base)',
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: sid,
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
      width: 40,
      height: 23,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--purple-600)' : 'var(--neutral-300)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2.5,
      left: on ? 19.5 : 2.5,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--canvas-white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SUMA RSE Tabs — underline-style tab switcher.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1.5px solid var(--border-subtle)',
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, rest), tabs.map(t => {
    const val = t.value ?? t;
    const label = t.label ?? t;
    const on = val === active;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(val),
      style: {
        position: 'relative',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '10px 14px 13px',
        fontFamily: 'inherit',
        fontSize: 'var(--size-base)',
        fontWeight: on ? 700 : 500,
        color: on ? 'var(--text-heading)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: -1.5,
        height: 3,
        borderRadius: '3px 3px 0 0',
        background: on ? 'var(--sunflower)' : 'transparent',
        transition: 'background var(--dur-fast) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SUMA RSE Card — content container. Variants: default (border), elevated (shadow),
 * soft (lavender), brand (purple). Optional hover lift when interactive.
 */
function Card({
  variant = 'default',
  interactive = false,
  padding = 'md',
  as = 'div',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)'
  };
  const variants = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)',
      shadow: 'var(--shadow-xs)'
    },
    elevated: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)',
      shadow: 'var(--shadow-md)'
    },
    soft: {
      background: 'var(--surface-soft)',
      border: '1px solid transparent',
      color: 'var(--text-body)',
      shadow: 'none'
    },
    brand: {
      background: 'var(--surface-brand)',
      border: '1px solid transparent',
      color: 'var(--text-on-dark)',
      shadow: 'var(--shadow-brand)'
    }
  };
  const v = variants[variant] || variants.default;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: v.background,
      border: v.border,
      color: v.color,
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding] ?? pads.md,
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : v.shadow,
      transform: interactive && hover ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SUMA RSE ProgressBar — donation/goal progress. Shows a label + amount when given.
 */
function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = false,
  valueText,
  color = 'accent',
  size = 'md',
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const height = size === 'sm' ? 8 : size === 'lg' ? 16 : 12;
  const fill = color === 'brand' ? 'var(--purple-600)' : 'var(--sunflower)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-sm)',
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-sm)',
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, valueText || `${Math.round(pct)}%`)), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    style: {
      height,
      width: '100%',
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${pct}%`,
      background: fill,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SUMA RSE Stat — a headline metric with label and optional description.
 * Uses the display font at large size for impact figures.
 */
function Stat({
  value,
  label,
  description,
  align = 'start',
  accent = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h1)',
      lineHeight: 1,
      color: accent ? 'var(--sunflower)' : 'var(--text-heading)',
      letterSpacing: '-0.02em'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      fontSize: 'var(--size-md)',
      color: 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--size-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, description));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Stat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Brand.jsx
try { (() => {
// SUMA RSE — shared brand bits for the website kit.
const ASSET = '../../assets';
function Logo({
  variant = 'default',
  height = 38
}) {
  const src = variant === 'reverse' ? `${ASSET}/logo-full-reverse.png` : `${ASSET}/logo-full-transparent.png`;
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "SUMA RSE Coahuila",
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  });
}

// Decorative scattered-tile motif derived from the logo mark.
function Mosaic({
  size = 120,
  color = 'var(--sunflower)',
  style
}) {
  const u = size / 4.2;
  const tiles = [{
    x: 0.05,
    y: 0.06,
    r: -12
  }, {
    x: 1.15,
    y: 0.0,
    r: 8
  }, {
    x: 2.25,
    y: 0.1
  }, {
    x: 3.3,
    y: 0.1
  }, {
    x: 0.1,
    y: 1.2
  }, {
    x: 3.3,
    y: 1.2
  }, {
    x: 0.1,
    y: 2.35
  }, {
    x: 1.2,
    y: 2.35
  }, {
    x: 2.25,
    y: 2.35
  }, {
    x: 3.3,
    y: 2.35
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size * 0.86,
      flex: 'none',
      ...style
    }
  }, tiles.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: t.x * u,
      top: t.y * u,
      width: u * 0.82,
      height: u * 0.82,
      background: color,
      borderRadius: 3,
      transform: t.r ? `rotate(${t.r}deg)` : 'none'
    }
  })));
}

// Honest photo placeholder — looks intentional (brand panel), labelled.
function PhotoPlaceholder({
  label = 'Fotografía',
  tone = 'lavender',
  radius = 'var(--radius-lg)',
  style,
  children
}) {
  const bg = tone === 'purple' ? 'var(--honey-flower)' : tone === 'plum' ? 'var(--plum-gray)' : 'var(--lavender)';
  const fg = tone === 'lavender' ? 'var(--purple-400)' : 'var(--purple-200)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: bg,
      borderRadius: radius,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Mosaic, {
    size: 140,
    color: tone === 'lavender' ? 'var(--purple-200)' : 'rgba(226,211,0,0.55)',
    style: {
      position: 'absolute',
      top: -10,
      right: -16,
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement(Mosaic, {
    size: 90,
    color: tone === 'lavender' ? 'var(--sunflower)' : 'rgba(255,255,255,0.18)',
    style: {
      position: 'absolute',
      bottom: -8,
      left: -10,
      opacity: 0.8
    }
  }), children || /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: fg,
      fontFamily: 'var(--font-text)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(window.SumaIcon, {
    name: "users",
    size: 18
  }), " ", label));
}
Object.assign(window, {
  SumaLogo: Logo,
  SumaMosaic: Mosaic,
  SumaPhoto: PhotoPlaceholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Brand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DonarScreen.jsx
try { (() => {
// SUMA RSE — Donate screen (interactive)
function DonarScreen({
  onNav
}) {
  const {
    Button,
    Card,
    Input,
    Checkbox,
    Switch,
    Badge,
    ProgressBar,
    Alert,
    Stat
  } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const Mosaic = window.SumaMosaic;
  const amounts = [200, 500, 1000, 2500];
  const [amount, setAmount] = React.useState(500);
  const [custom, setCustom] = React.useState('');
  const [monthly, setMonthly] = React.useState(true);
  const [done, setDone] = React.useState(false);
  const value = custom ? Number(custom) || 0 : amount;
  const impact = {
    200: 'Un set de materiales de lectura para una persona.',
    500: 'Un ciclo de alfabetización para un adulto.',
    1000: 'Una beca escolar parcial por un mes.',
    2500: 'Un taller de oficios completo para una familia.'
  }[amount] || 'Cada peso abre una oportunidad en Saltillo.';
  if (done) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--lavender)',
        minHeight: 560,
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        margin: '0 auto',
        padding: 'var(--section-y) var(--gutter)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 76,
        height: 76,
        borderRadius: '50%',
        background: 'var(--success)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 24px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 40
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'var(--fs-h1)',
        color: 'var(--text-heading)',
        margin: 0
      }
    }, "\xA1Gracias, de coraz\xF3n!"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--size-lg)',
        color: 'var(--text-body)',
        lineHeight: 1.55,
        margin: '16px 0 28px'
      }
    }, "Tu donaci\xF3n ", monthly ? 'mensual ' : '', "de ", /*#__PURE__*/React.createElement("strong", null, "$", value.toLocaleString('es-MX'), " MXN"), " ayudar\xE1 a abrir oportunidades en Saltillo. Te enviaremos tu recibo deducible por correo."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => onNav('inicio')
    }, "Volver al inicio"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => setDone(false)
    }, "Hacer otra donaci\xF3n"))));
  }
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--canvas-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter) var(--section-y)',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--honey-flower)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: 'var(--sunflower)',
      borderRadius: 2
    }
  }), "Donar"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h1)',
      color: 'var(--text-heading)',
      margin: '14px 0 8px'
    }
  }, "Tu donaci\xF3n abre oportunidades"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--size-md)',
      margin: '0 0 28px'
    }
  }, "Elige un monto. Es seguro y deducible de impuestos."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-sm)',
      fontWeight: 700,
      color: 'var(--text-body)',
      marginBottom: 10
    }
  }, "Monto (MXN)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 10,
      marginBottom: 14
    }
  }, amounts.map(a => {
    const on = !custom && a === amount;
    return /*#__PURE__*/React.createElement("button", {
      key: a,
      onClick: () => {
        setAmount(a);
        setCustom('');
      },
      style: {
        padding: '16px 0',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--size-lg)',
        color: on ? 'var(--purple-700)' : 'var(--text-body)',
        background: on ? 'var(--purple-50)' : 'var(--surface-card)',
        border: `2px solid ${on ? 'var(--purple-500)' : 'var(--border-default)'}`,
        transition: 'all var(--dur-fast) var(--ease-out)'
      }
    }, "$", a.toLocaleString('es-MX'));
  })), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Otro monto",
    value: custom,
    onChange: e => setCustom(e.target.value.replace(/[^0-9]/g, '')),
    leadingIcon: /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: 'var(--text-muted)'
      }
    }, "$")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '20px 0',
      padding: '14px 16px',
      background: 'var(--surface-soft)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-body)'
    }
  }, "Donaci\xF3n mensual"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-sm)',
      color: 'var(--text-muted)'
    }
  }, "Apoyo constante, mayor impacto.")), /*#__PURE__*/React.createElement(Switch, {
    checked: monthly,
    onChange: e => setMonthly(e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Tu nombre"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    placeholder: "tu@correo.com",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 18
    })
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Quiero recibir noticias de SUMA RSE",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    fullWidth: true,
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 18
    }),
    onClick: () => setDone(true)
  }, "Donar $", value.toLocaleString('es-MX'), " ", monthly ? 'al mes' : 'ahora'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      position: 'sticky',
      top: 90
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "brand",
    padding: "lg",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Mosaic, {
    size: 140,
    color: "rgba(226,211,0,0.18)",
    style: {
      position: 'absolute',
      top: -16,
      right: -16
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    variant: "accent"
  }, "Tu impacto"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--size-xl)',
      lineHeight: 1.3,
      color: 'var(--canvas-white)',
      margin: '14px 0 0'
    }
  }, impact)), /*#__PURE__*/React.createElement(Card, {
    variant: "default",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-heading)',
      marginBottom: 4
    }
  }, "Campa\xF1a: Ciclo escolar 2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      color: 'var(--text-muted)',
      fontSize: 'var(--size-sm)'
    }
  }, "Becas para 80 estudiantes."), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 84000,
    max: 120000,
    showValue: true,
    valueText: "$84,000 / $120,000"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "168",
    label: "donantes"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "70%",
    label: "de la meta"
  }))), /*#__PURE__*/React.createElement(Alert, {
    variant: "success",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 20
    })
  }, "Pago seguro \xB7 Recibo deducible de impuestos."))));
}
window.SumaDonar = DonarScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DonarScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// SUMA RSE — site footer
function Footer({
  onNav
}) {
  const Icon = window.SumaIcon;
  const col = (title, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--sunflower)',
      textTransform: 'uppercase',
      letterSpacing: '.1em'
    }
  }, title), items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--purple-100)',
      textDecoration: 'none',
      fontSize: 'var(--size-base)'
    }
  }, it)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--purple-800)',
      color: 'var(--canvas-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter) var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(window.SumaLogo, {
    variant: "reverse",
    height: 40
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--purple-100)',
      lineHeight: 1.6,
      fontSize: 'var(--size-base)'
    }
  }, "Educaci\xF3n social gratuita para que m\xE1s personas en Saltillo construyan mejores oportunidades."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['instagram', 'facebook'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": n,
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-md)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--purple-900)',
      background: 'var(--sunflower)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 20
  }))))), col('Programas', ['Alfabetización', 'Becas escolares', 'Talleres', 'Mentorías']), col('Organización', ['Nosotros', 'Impacto', 'Transparencia', 'Aliados']), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--sunflower)',
      textTransform: 'uppercase',
      letterSpacing: '.1em'
    }
  }, "Contacto"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      color: 'var(--purple-100)',
      fontSize: 'var(--size-base)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 18
  }), " Saltillo, Coahuila"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      color: 'var(--purple-100)',
      fontSize: 'var(--size-base)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  }), " hola@sumarse.org"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      color: 'var(--purple-100)',
      fontSize: 'var(--size-base)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18
  }), " (844) 000 0000"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--purple-700)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '18px var(--gutter)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      color: 'var(--purple-200)',
      fontSize: 'var(--size-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 SUMA RSE Coahuila. Organizaci\xF3n sin fines de lucro."), /*#__PURE__*/React.createElement("span", null, "Aviso de privacidad \xB7 T\xE9rminos"))));
}
window.SumaFooter = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// SUMA RSE — site header / nav
function Header({
  current = 'inicio',
  onNav
}) {
  const {
    Button
  } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const links = [{
    id: 'inicio',
    label: 'Inicio'
  }, {
    id: 'programas',
    label: 'Programas'
  }, {
    id: 'nosotros',
    label: 'Nosotros'
  }, {
    id: 'donar',
    label: 'Donar'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'color-mix(in srgb, var(--canvas-white) 88%, transparent)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#inicio",
    onClick: e => {
      e.preventDefault();
      onNav('inicio');
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(window.SumaLogo, {
    height: 36
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, links.map(l => {
    const on = current === l.id;
    return /*#__PURE__*/React.createElement("a", {
      key: l.id,
      href: `#${l.id}`,
      onClick: e => {
        e.preventDefault();
        onNav(l.id);
      },
      style: {
        padding: '8px 14px',
        borderRadius: 'var(--radius-md)',
        textDecoration: 'none',
        fontFamily: 'var(--font-text)',
        fontSize: 'var(--size-base)',
        fontWeight: on ? 700 : 500,
        color: on ? 'var(--text-heading)' : 'var(--text-body)',
        background: on ? 'var(--surface-soft)' : 'transparent'
      }
    }, l.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => onNav('nosotros')
  }, "Voluntariado"), /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "sm",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 16
    }),
    onClick: () => onNav('donar')
  }, "Donar"))));
}
window.SumaHeader = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// SUMA RSE — Home screen
function HomeScreen({
  onNav
}) {
  const {
    Button,
    Badge,
    Card,
    Stat,
    ProgressBar
  } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const Photo = window.SumaPhoto;
  const Mosaic = window.SumaMosaic;
  const eyebrow = text => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--honey-flower)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: 'var(--sunflower)',
      borderRadius: 2
    }
  }), text);
  const programs = [{
    icon: 'book',
    tag: 'Adultos',
    title: 'Alfabetización',
    desc: 'Clases gratuitas de lectura y escritura para personas adultas.'
  }, {
    icon: 'graduation',
    tag: 'Jóvenes',
    title: 'Becas escolares',
    desc: 'Apoyo económico y mentoría para que nadie deje la escuela.'
  }, {
    icon: 'sparkles',
    tag: 'Familias',
    title: 'Talleres',
    desc: 'Oficios, arte y habilidades para la vida en comunidad.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--canvas-white)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Mosaic, {
    size: 220,
    color: "var(--lavender)",
    style: {
      position: 'absolute',
      top: -30,
      right: -40,
      opacity: 0.8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow('Educación social · Saltillo'), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-display)',
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: 'var(--text-heading)',
      margin: '18px 0 0'
    }
  }, "S\xFAmate a abrir", /*#__PURE__*/React.createElement("br", null), "oportunidades"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-lg)',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      margin: '20px 0 0',
      maxWidth: 480
    }
  }, "Acompa\xF1amos a ni\xF1as, ni\xF1os, j\xF3venes y adultos de Saltillo con educaci\xF3n gratuita. Porque cuando una persona aprende, toda la comunidad avanza."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 18
    }),
    onClick: () => onNav('donar')
  }, "Donar ahora"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNav('programas')
  }, "Ver programas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 38
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "+1,200",
    label: "personas acompa\xF1adas"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "7",
    label: "a\xF1os en Saltillo"
  }))), /*#__PURE__*/React.createElement(Photo, {
    tone: "purple",
    style: {
      height: 440
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--honey-flower)',
      color: 'var(--canvas-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "92%",
    label: "contin\xFAan estudiando",
    accent: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "18",
    label: "talleres activos",
    accent: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "240",
    label: "voluntarios",
    accent: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "100%",
    label: "programas gratuitos",
    accent: true
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--canvas-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow('Nuestros programas'), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h2)',
      color: 'var(--text-heading)',
      margin: '12px 0 0'
    }
  }, "Educaci\xF3n que cambia historias")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNav('programas')
  }, "Ver todos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, programs.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    variant: "elevated",
    interactive: true,
    onClick: () => onNav('programas')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'var(--purple-50)',
      color: 'var(--purple-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 26,
    strokeWidth: 1.9
  })), /*#__PURE__*/React.createElement(Badge, {
    variant: "brand"
  }, p.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--size-xl)',
      color: 'var(--text-heading)',
      margin: '12px 0 8px'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, p.desc), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 16,
      color: 'var(--text-link)',
      fontWeight: 700,
      fontSize: 'var(--size-sm)'
    }
  }, "Conocer m\xE1s ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16
  }))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--lavender)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    tone: "lavender",
    label: "Historia de comunidad",
    style: {
      height: 360
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 40,
    style: {
      color: 'var(--sunflower)'
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-h3)',
      lineHeight: 1.3,
      color: 'var(--text-heading)',
      margin: '16px 0 0'
    }
  }, "\"Aprend\xED a leer a los 54 a\xF1os. Hoy le leo cuentos a mis nietos. SUMA RSE me devolvi\xF3 algo que cre\xEDa perdido.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 24
    }
  }, (() => {
    const {
      Avatar
    } = window.SUMARSEDesignSystem_6dc1cb;
    return /*#__PURE__*/React.createElement(Avatar, {
      name: "Rosa Mart\xEDnez",
      size: "lg"
    });
  })(), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-body)'
    }
  }, "Rosa Mart\xEDnez"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--size-sm)'
    }
  }, "Programa de Alfabetizaci\xF3n")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--canvas-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--plum-gray)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      position: 'relative',
      padding: 'var(--space-8) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Mosaic, {
    size: 180,
    color: "rgba(226,211,0,0.16)",
    style: {
      position: 'absolute',
      bottom: -20,
      right: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h2)',
      color: 'var(--canvas-white)',
      margin: 0
    }
  }, "Tu apoyo se convierte en oportunidades"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--neutral-300)',
      fontSize: 'var(--size-lg)',
      lineHeight: 1.55,
      margin: '14px 0 24px',
      maxWidth: 460
    }
  }, "Con $500 al mes, una persona adulta accede a un ciclo completo de alfabetizaci\xF3n."), /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 18
    }),
    onClick: () => onNav('donar')
  }, "Quiero donar")), /*#__PURE__*/React.createElement(Card, {
    variant: "default",
    padding: "lg",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-heading)',
      fontSize: 'var(--size-md)',
      marginBottom: 4
    }
  }, "Campa\xF1a: Ciclo escolar 2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      color: 'var(--text-muted)',
      fontSize: 'var(--size-sm)'
    }
  }, "Becas para 80 estudiantes de Saltillo."), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 84000,
    max: 120000,
    showValue: true,
    valueText: "$84,000 de $120,000"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 12,
      fontSize: 'var(--size-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-body)'
    }
  }, "168"), " donantes"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-body)'
    }
  }, "12"), " d\xEDas restantes")))))));
}
window.SumaHome = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// SUMA RSE — icon set. Paths derived from Lucide (lucide.dev, ISC license),
// the project's chosen icon system: 2px stroke, round caps/joins, 24×24 grid.
const SUMA_ICON_PATHS = {
  menu: '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  graduation: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',
  'map-pin': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"/>',
  handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  quote: '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>'
};
function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  style,
  ...rest
}) {
  const paths = SUMA_ICON_PATHS[name] || '';
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: paths
    }
  }, rest));
}
window.SumaIcon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NosotrosScreen.jsx
try { (() => {
// SUMA RSE — Nosotros / Impact screen
function NosotrosScreen({
  onNav
}) {
  const {
    Button,
    Card,
    Stat,
    Alert
  } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const Photo = window.SumaPhoto;
  const Mosaic = window.SumaMosaic;
  const values = [{
    icon: 'heart',
    title: 'Cercanía',
    desc: 'Conocemos a cada persona por su nombre y su historia.'
  }, {
    icon: 'users',
    title: 'Comunidad',
    desc: 'Saltillo se transforma cuando trabajamos juntos.'
  }, {
    icon: 'sparkles',
    title: 'Dignidad',
    desc: 'La educación es un derecho, no un privilegio.'
  }];
  const timeline = [{
    year: '2019',
    text: 'Nace SUMA RSE con un primer grupo de alfabetización en una colonia de Saltillo.'
  }, {
    year: '2021',
    text: 'Sumamos becas escolares y mentorías; llegamos a 400 personas.'
  }, {
    year: '2023',
    text: 'Abrimos talleres de oficios y arte comunitario.'
  }, {
    year: '2026',
    text: 'Más de 1,200 personas acompañadas y 240 voluntarios activos.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--canvas-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--honey-flower)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: 'var(--sunflower)',
      borderRadius: 2
    }
  }), "Nosotros"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h1)',
      color: 'var(--text-heading)',
      margin: '14px 0 0'
    }
  }, "Creemos que la educaci\xF3n abre puertas"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-lg)',
      color: 'var(--text-body)',
      lineHeight: 1.6,
      margin: '18px 0 0'
    }
  }, "Somos una organizaci\xF3n sin fines de lucro en Saltillo, Coahuila. Acompa\xF1amos a personas de todas las edades \u2014en especial a quienes tienen menos recursos\u2014 con educaci\xF3n social gratuita."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-base)',
      color: 'var(--text-muted)',
      lineHeight: 1.7,
      margin: '14px 0 0'
    }
  }, "No damos clases y nos vamos: construimos comunidad, generamos confianza y abrimos oportunidades reales.")), /*#__PURE__*/React.createElement(Photo, {
    tone: "purple",
    label: "Nuestro equipo",
    style: {
      height: 380
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--lavender)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h2)',
      color: 'var(--text-heading)',
      margin: '0 0 32px',
      textAlign: 'center'
    }
  }, "Lo que nos mueve"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, values.map(v => /*#__PURE__*/React.createElement(Card, {
    key: v.title,
    variant: "default",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--sunflower)',
      color: 'var(--plum-gray)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: v.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--size-xl)',
      color: 'var(--text-heading)',
      margin: '0 0 8px'
    }
  }, v.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, v.desc)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--honey-flower)',
      color: 'var(--canvas-white)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Mosaic, {
    size: 200,
    color: "rgba(226,211,0,0.14)",
    style: {
      position: 'absolute',
      top: 20,
      left: -30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h2)',
      color: 'var(--canvas-white)',
      margin: '0 0 36px',
      textAlign: 'center'
    }
  }, "Nuestro impacto en n\xFAmeros"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "+1,200",
    label: "personas acompa\xF1adas",
    accent: true,
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "92%",
    label: "contin\xFAan estudiando",
    accent: true,
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "240",
    label: "voluntarios activos",
    accent: true,
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "7",
    label: "a\xF1os en Saltillo",
    accent: true,
    align: "center"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--canvas-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h2)',
      color: 'var(--text-heading)',
      margin: '0 0 32px'
    }
  }, "Nuestra historia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, timeline.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.year,
    style: {
      display: 'grid',
      gridTemplateColumns: '90px 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--size-xl)',
      color: 'var(--honey-flower)'
    }
  }, t.year), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingLeft: 28,
      paddingBottom: i === timeline.length - 1 ? 0 : 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 4,
      width: 14,
      height: 14,
      borderRadius: 4,
      background: 'var(--sunflower)',
      border: '2px solid var(--honey-flower)'
    }
  }), i !== timeline.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 6,
      top: 20,
      bottom: 0,
      width: 2,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-body)',
      lineHeight: 1.6
    }
  }, t.text))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    variant: "brand",
    title: "\xBFQuieres sumarte?",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "handshake",
      size: 20
    })
  }, "Buscamos voluntarios como mentores, talleristas y apoyo log\xEDstico. T\xFA tambi\xE9n puedes abrir oportunidades.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('donar')
  }, "Donar"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNav('programas')
  }, "Ver programas")))));
}
window.SumaNosotros = NosotrosScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NosotrosScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProgramsScreen.jsx
try { (() => {
// SUMA RSE — Programs screen (filterable)
function ProgramsScreen({
  onNav
}) {
  const {
    Button,
    Badge,
    Card,
    Tag
  } = window.SUMARSEDesignSystem_6dc1cb;
  const Icon = window.SumaIcon;
  const Photo = window.SumaPhoto;
  const all = [{
    icon: 'book',
    cat: 'Adultos',
    title: 'Alfabetización',
    desc: 'Lectura, escritura y matemáticas básicas para personas adultas.',
    meta: 'Lun a Jue · Gratuito'
  }, {
    icon: 'graduation',
    cat: 'Jóvenes',
    title: 'Becas escolares',
    desc: 'Apoyo económico y mentoría para continuar la secundaria y prepa.',
    meta: 'Convocatoria anual'
  }, {
    icon: 'sparkles',
    cat: 'Familias',
    title: 'Talleres de oficios',
    desc: 'Costura, carpintería y repostería para generar ingresos.',
    meta: 'Sábados · Gratuito'
  }, {
    icon: 'users',
    cat: 'Jóvenes',
    title: 'Mentorías',
    desc: 'Acompañamiento uno a uno con voluntarios de la comunidad.',
    meta: 'Horario flexible'
  }, {
    icon: 'book',
    cat: 'Niñez',
    title: 'Club de lectura',
    desc: 'Fomento a la lectura para niñas y niños de 6 a 12 años.',
    meta: 'Martes y Jueves'
  }, {
    icon: 'sparkles',
    cat: 'Familias',
    title: 'Arte comunitario',
    desc: 'Expresión, música y teatro como herramientas de cambio.',
    meta: 'Viernes · Gratuito'
  }];
  const cats = ['Todos', 'Niñez', 'Jóvenes', 'Adultos', 'Familias'];
  const [cat, setCat] = React.useState('Todos');
  const list = cat === 'Todos' ? all : all.filter(p => p.cat === cat);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--lavender)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--honey-flower)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: 'var(--sunflower)',
      borderRadius: 2
    }
  }), "Programas"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h1)',
      color: 'var(--text-heading)',
      margin: '14px 0 0',
      maxWidth: 720
    }
  }, "Educaci\xF3n gratuita para cada etapa de la vida"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-lg)',
      color: 'var(--text-body)',
      lineHeight: 1.55,
      margin: '16px 0 0',
      maxWidth: 620
    }
  }, "Todos nuestros programas son gratuitos y se sostienen con la comunidad. Encuentra el que m\xE1s te interese."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--canvas-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: c === cat,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, list.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    variant: "default",
    interactive: true
  }, /*#__PURE__*/React.createElement(Photo, {
    tone: "lavender",
    label: p.cat,
    radius: "var(--radius-md)",
    style: {
      height: 130,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    variant: "brand"
  }, p.cat), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--size-xl)',
      color: 'var(--text-heading)',
      margin: '12px 0 8px'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      lineHeight: 1.6,
      minHeight: 48
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginTop: 14,
      color: 'var(--text-subtle)',
      fontSize: 'var(--size-sm)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 16
  }), " ", p.meta)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "handshake",
      size: 18
    }),
    onClick: () => onNav('nosotros')
  }, "Quiero ser voluntario")))));
}
window.SumaPrograms = ProgramsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProgramsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Stat = __ds_scope.Stat;

})();

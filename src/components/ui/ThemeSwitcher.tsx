import { useTheme } from '../../context/ThemeContext';

export function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-400">Theme:</span>
      <div className="flex gap-2">
        {themes.map((t) => (
          <button
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={`w-7 h-7 rounded-full transition-all duration-200 ${
              theme === t.name
                ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-white scale-110'
                : 'hover:scale-110 opacity-70 hover:opacity-100'
            }`}
            style={{ backgroundColor: t.color }}
            title={t.label}
            aria-label={`Switch to ${t.label} theme`}
          />
        ))}
      </div>
    </div>
  );
}

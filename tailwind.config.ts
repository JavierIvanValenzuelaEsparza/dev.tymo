import type { Config } from "tailwindcss";

// all in fixtures is set to tailwind v3 as interims solutions

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  safelist: [
    {
      pattern: /(bg|text|border|from|to|shadow)-(emerald|blue|purple|red|orange|cyan|teal|indigo|violet|rose|amber|yellow|sky|fuchsia|pink)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /(border|hover:border)-(emerald|blue|purple|red|orange|cyan|teal|indigo|violet|rose|amber|yellow|sky|fuchsia|pink)-(400|500)\/?(10|20|25|50)?/,
    },
    {
      pattern: /hover:(bg|from|to)-(emerald|blue|purple|red|orange|cyan|teal|indigo|violet|rose|amber|yellow|sky|fuchsia|pink)-(400|500|600|700)/,
    },
    {
      pattern: /w-(1|2|3|4|5|6|10|12)/,
    },
    {
      pattern: /h-(1|2|3|4|5|6|10|12)/,
    },
    'border-emerald-400/50',
    'border-blue-400/50', 
    'border-purple-400/50',
    'border-red-400/50',
    'border-orange-400/50',
    'border-cyan-400/50',
    'bg-emerald-400',
    'bg-blue-400',
    'bg-purple-400', 
    'bg-red-400',
    'bg-orange-400',
    'bg-cyan-400',
    'to-emerald-400',
    'to-blue-400',
    'to-purple-400',
    'to-red-400', 
    'to-orange-400',
    'to-cyan-400',
    'to-teal-500',
    'to-indigo-500',
    'to-violet-500',
    'to-rose-500',
    'to-amber-500',
    'from-emerald-900/20',
    'from-blue-900/20',
    'from-purple-900/20',
    'from-red-900/20',
    'from-orange-900/20',
    'from-cyan-900/20',
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

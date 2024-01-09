import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useTheme } from 'next-themes'

const CodeHighligher = ({ lang, code }: { lang: string; code: string }) => {
  const { theme } = useTheme()
  return (
    <SyntaxHighlighter
      language={lang?.replace(/\language-/, '') || 'javascript'}
      style={theme === 'light' ? oneLight : oneDark}
      customStyle={{
        padding: 20,
        fontSize: 15,
        fontFamily: 'var(--font-family)'
      }}
    >
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeHighligher

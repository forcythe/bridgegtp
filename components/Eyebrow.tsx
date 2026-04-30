interface Props { text: string; variant?: 'default' | 'muted' | 'gold' }
export default function Eyebrow({ text, variant = 'default' }: Props) {
  return <div className={`eyebrow${variant !== 'default' ? ` ${variant}` : ''}`}>{text}</div>
}

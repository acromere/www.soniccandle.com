import CopyrightText from './CopyrightText.tsx';

export function Footer() {
  return (
    <div className='footer'>
      <div className='copyright'><a href='/legal'><CopyrightText/></a></div>
      <div className='tag-line'>Video for your music</div>
    </div>
  )
}

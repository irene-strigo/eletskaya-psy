import { SocialMediaContainer, SocialMediaIcon } from './CommonStyles';

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <a href="https://www.instagram.com/lera_eletskaya_psy?igsh=MTY1cW9iMzJ6YnJucA==">
        <SocialMediaIcon src="/assets/Icons/insta-icon-black.png"></SocialMediaIcon>
      </a>
      <a href="https://www.instagram.com/lera_eletskaya_psy?igsh=MTY1cW9iMzJ6YnJucA==">
        {' '}
        <SocialMediaIcon src="/assets/Icons/telegramm-icon-black.png"></SocialMediaIcon>
      </a>
      <a href="https://vk.com/leraeletskaya">
        <SocialMediaIcon src="/assets/Icons/vk-icon-black.png"></SocialMediaIcon>
      </a>
      <a href="https://www.instagram.com/lera_eletskaya_psy?igsh=MTY1cW9iMzJ6YnJucA==">
        {' '}
        <SocialMediaIcon src="/assets/Icons/youtube-icon-black.png"></SocialMediaIcon>
      </a>
      <a href="https://www.instagram.com/lera_eletskaya_psy?igsh=MTY1cW9iMzJ6YnJucA==">
        {' '}
        <SocialMediaIcon src="/assets/Icons/facebook-icon-black.png"></SocialMediaIcon>
      </a>
    </SocialMediaContainer>
  );
};

export default SocialMedia;

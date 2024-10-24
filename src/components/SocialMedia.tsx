import { SocialMediaContainer, SocialMediaIcon } from './CommonStyles';

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <a href="https://www.instagram.com/lera_eletskaya_psy?igsh=MTY1cW9iMzJ6YnJucA==">
        <SocialMediaIcon src="/assets/Icons/instagram-icon.png"></SocialMediaIcon>
      </a>
      <a href="https://www.instagram.com/lera_eletskaya_psy?igsh=MTY1cW9iMzJ6YnJucA==">
        {' '}
        <SocialMediaIcon src="/assets/Icons/telegram-icon.png"></SocialMediaIcon>
      </a>
      <a href="https://vk.com/leraeletskaya">
        <SocialMediaIcon src="/assets/Icons/vkontakte-icon.png"></SocialMediaIcon>
      </a>
      <a href="https://www.instagram.com/lera_eletskaya_psy?igsh=MTY1cW9iMzJ6YnJucA==">
        {' '}
        <SocialMediaIcon src="/assets/Icons/youtube-icon.png"></SocialMediaIcon>
      </a>
      <a href="https://www.instagram.com/lera_eletskaya_psy?igsh=MTY1cW9iMzJ6YnJucA==">
        {' '}
        <SocialMediaIcon src="/assets/Icons/facebook-icon.png"></SocialMediaIcon>
      </a>
    </SocialMediaContainer>
  );
};

export default SocialMedia;

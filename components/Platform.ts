export const PLATFORM = {
  youtube: 'https://youtube.com/',
  twitch: 'https://www.twitch.tv/',
  twitchClip: 'https://clips.twitch.tv/',
  unknown: ' '
} as const

export type Platform = (typeof PLATFORM)[keyof typeof PLATFORM]

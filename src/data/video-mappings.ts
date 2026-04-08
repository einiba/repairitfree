/**
 * Maps guide IDs to YouTube video IDs from reputable repair channels.
 *
 * To add a video:
 *   1. Find a helpful repair video on YouTube (iFixit, PartSelect, etc.)
 *   2. Copy the video ID from the URL (the part after ?v=)
 *   3. Add an entry: "guide-id": "VIDEO_ID"
 *
 * Example:
 *   "samsung-washer-not-draining": "dQw4w9WgXcQ"
 */
export const videoMappings: Record<string, string> = {
  // Add video mappings here as they become available
  // "guide-id": "youtube-video-id",
};

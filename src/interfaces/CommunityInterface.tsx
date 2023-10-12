export interface CommunityProps {
  data: string[];
}

export interface AltmetricsProps {
  altdata: { title: string; img: string; date: string }[];
}

export interface PollProps {
  click: () => void;
}

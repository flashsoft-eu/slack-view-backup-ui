type UserProfile = {
    title: string;
    phone: string;
    skype: string;
    real_name: string;
    real_name_normalized: string;
    display_name: string;
    display_name_normalized: string;
    fields: null;
    status_text: string;
    status_emoji: string;
    status_emoji_display_info: any[]; // You might define a more specific type here
    status_expiration: number;
    avatar_hash: string;
    image_original: string;
    is_custom_image: boolean;
    email: string;
    huddle_state: string;
    huddle_state_expiration_ts: number;
    first_name: string;
    last_name: string;
    image_24: string;
    image_32: string;
    image_48: string;
    image_72: string;
    image_192: string;
    image_512: string;
    image_1024: string;
    status_text_canonical: string;
    team: string;
  };
  
  export type User = {
    id: string;
    team_id: string;
    name: string;
    deleted: boolean;
    color: string;
    real_name: string;
    tz: string;
    tz_label: string;
    tz_offset: number;
    profile: UserProfile;
    is_admin: boolean;
    is_owner: boolean;
    is_primary_owner: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    is_bot: boolean;
    is_app_user: boolean;
    updated: number;
    is_email_confirmed: boolean;
    who_can_share_contact_card: string;
    profile_image_24: string;
    profile_image_32: string;
    profile_image_48: string;
    profile_title: string;
    profile_phone: string;
    profile_skype: string;
    profile_real_name: string;
    profile_real_name_normalized: string;
    profile_display_name: string;
    profile_display_name_normalized: string;
    profile_fields: null;
    profile_status_text: string;
    profile_status_emoji: string;
    profile_status_expiration: number;
    profile_avatar_hash: string;
    profile_image_original: string;
    is_custom_image: boolean;
    profile_email: string;
    profile_image_72: string;
    profile_image_192: string;
    profile_image_512: string;
    profile_image_1024: string;
    profile_team: string;
    profile_first_name: string;
    profile_last_name: string;
  };
  

  type ConversationTopic = {
    value: string;
    creator: string;
    last_set: number;
  };
  
  type ConversationPurpose = {
    value: string;
    creator: string;
    last_set: number;
  };
  
  export type Channel = {
    id: string;
    name: string;
    is_channel: boolean;
    is_group: boolean;
    is_im: boolean;
    is_mpim: boolean;
    is_private: boolean;
    created: number;
    is_archived: boolean;
    is_general: boolean;
    unlinked: number;
    name_normalized: string;
    is_shared: boolean;
    is_frozen: boolean;
    is_org_shared: boolean;
    is_pending_ext_shared: boolean;
    pending_shared: any[]; // Define a more specific type if needed
    context_team_id: string;
    updated: number;
    parent_conversation: null | any; // Define a more specific type if needed
    creator: string;
    is_ext_shared: boolean;
    shared_team_ids: string[];
    pending_connected_team_ids: string[];
    is_member: boolean;
    topic: ConversationTopic;
    purpose: ConversationPurpose;
    purpose_value?: string;
    previous_names: string[];
    num_members: number;
  };

export type DirectMessage = {
    id: string;
    created: number;
    is_frozen: boolean;
    is_archived: boolean;
    is_im: boolean;
    is_org_shared: boolean;
    context_team_id: string;
    updated: number;
    user: string;
    is_user_deleted: boolean;
    priority: number;
  };

export type Conversation = Channel & DirectMessage;

type RichTextSectionElement = {
    type: 'rich_text_section';
    elements: RichTextElement[];
  };
  
  type RichTextListElement = {
    type: 'rich_text_list';
    elements: RichTextSectionElement[];
    style: 'bullet' | string; // Define more specific types if needed
    indent: number;
    border: number;
  };
  
  type TextElement = {
    type: 'text';
    text: string;
  };
  
  type RichTextElement = RichTextListElement | RichTextSectionElement | TextElement;
  
  export type Message = {
    client_msg_id: string;
    type: 'message';
    text: string;
    user: string;
    ts: string;
    blocks: RichTextListElement[];
    team: string;
    thread_ts: string;
    reply_count: number;
    reply_users_count: number;
    latest_reply: string;
    reply_users: string[];
    is_locked: boolean;
    subscribed: boolean;
  };

export type ChannelRoot = Message[][]

export type ChannelThread = {
    messages: Message[];
}

type TeamIcon = {
  image_default: boolean;
  image_34: string;
  image_44: string;
  image_68: string;
  image_88: string;
  image_102: string;
  image_230: string;
  image_132: string;
};

export type Team = {
  id: string;
  name: string;
  url: string;
  domain: string;
  email_domain: string;
  icon: TeamIcon;
  avatar_base_url: string;
  is_verified: boolean;
  icon_image_default: boolean;
  icon_image_34: string;
  icon_image_44: string;
  icon_image_68: string;
  icon_image_88: string;
  icon_image_102: string;
  icon_image_230: string;
  icon_image_132: string;
};

export type LoadData =  {
    channels: Conversation[],
    users: User[],
    team: Team
    channel_id: string
    is_thread: boolean
    messages?: Message[]
}


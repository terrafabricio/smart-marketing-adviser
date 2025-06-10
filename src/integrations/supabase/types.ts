export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ad_groups: {
        Row: {
          campaign_id: string | null
          created_at: string | null
          google_ad_group_id: number | null
          id: number
          name: string | null
          status: string | null
        }
        Insert: {
          campaign_id?: string | null
          created_at?: string | null
          google_ad_group_id?: number | null
          id?: number
          name?: string | null
          status?: string | null
        }
        Update: {
          campaign_id?: string | null
          created_at?: string | null
          google_ad_group_id?: number | null
          id?: number
          name?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ad_groups_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_recommendations: {
        Row: {
          campaign_id: string | null
          created_at: string | null
          id: string
          recommendation: string
          status: string | null
          type: string | null
          user_id: string | null
        }
        Insert: {
          campaign_id?: string | null
          created_at?: string | null
          id?: string
          recommendation: string
          status?: string | null
          type?: string | null
          user_id?: string | null
        }
        Update: {
          campaign_id?: string | null
          created_at?: string | null
          id?: string
          recommendation?: string
          status?: string | null
          type?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_recommendations_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_recommendations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      api_keys: {
        Row: {
          api_key: string
          api_name: string
          user_id: string
        }
        Insert: {
          api_key: string
          api_name: string
          user_id?: string
        }
        Update: {
          api_key?: string
          api_name?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "api_keys_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_metrics: {
        Row: {
          campaign_id: string | null
          clicks: number | null
          conversion_rate: number | null
          conversions: number | null
          cost: number | null
          cpc: number | null
          created_at: string | null
          ctr: number | null
          date: string
          id: string
          impressions: number | null
          roas: number | null
          user_id: string
        }
        Insert: {
          campaign_id?: string | null
          clicks?: number | null
          conversion_rate?: number | null
          conversions?: number | null
          cost?: number | null
          cpc?: number | null
          created_at?: string | null
          ctr?: number | null
          date: string
          id?: string
          impressions?: number | null
          roas?: number | null
          user_id?: string
        }
        Update: {
          campaign_id?: string | null
          clicks?: number | null
          conversion_rate?: number | null
          conversions?: number | null
          cost?: number | null
          cpc?: number | null
          created_at?: string | null
          ctr?: number | null
          date?: string
          id?: string
          impressions?: number | null
          roas?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaign_metrics_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_metrics_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          created_at: string | null
          end_date: string | null
          id: string
          name: string
          platform: string | null
          start_date: string | null
          status: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          end_date?: string | null
          id?: string
          name: string
          platform?: string | null
          start_date?: string | null
          status?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          end_date?: string | null
          id?: string
          name?: string
          platform?: string | null
          start_date?: string | null
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_messages: {
        Row: {
          id: string
          message: string
          role: string
          timestamp: string | null
          user_id: string
        }
        Insert: {
          id?: string
          message: string
          role: string
          timestamp?: string | null
          user_id: string
        }
        Update: {
          id?: string
          message?: string
          role?: string
          timestamp?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      integrations: {
        Row: {
          access_token: string | null
          connected: boolean | null
          created_at: string | null
          id: string
          last_synced: string | null
          refresh_token: string | null
          service: string
          user_id: string
        }
        Insert: {
          access_token?: string | null
          connected?: boolean | null
          created_at?: string | null
          id?: string
          last_synced?: string | null
          refresh_token?: string | null
          service: string
          user_id: string
        }
        Update: {
          access_token?: string | null
          connected?: boolean | null
          created_at?: string | null
          id?: string
          last_synced?: string | null
          refresh_token?: string | null
          service?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "integrations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      keywords: {
        Row: {
          ad_group_id: number | null
          created_at: string | null
          google_keyword_id: number | null
          id: number
          match_type: string | null
          status: string | null
          text: string | null
        }
        Insert: {
          ad_group_id?: number | null
          created_at?: string | null
          google_keyword_id?: number | null
          id?: number
          match_type?: string | null
          status?: string | null
          text?: string | null
        }
        Update: {
          ad_group_id?: number | null
          created_at?: string | null
          google_keyword_id?: number | null
          id?: number
          match_type?: string | null
          status?: string | null
          text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "keywords_ad_group_id_fkey"
            columns: ["ad_group_id"]
            isOneToOne: false
            referencedRelation: "ad_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      search_terms: {
        Row: {
          ad_group_id: number | null
          clicks: number | null
          conversions: number | null
          cost: number | null
          created_at: string | null
          date: string | null
          id: number
          impressions: number | null
          term_text: string | null
        }
        Insert: {
          ad_group_id?: number | null
          clicks?: number | null
          conversions?: number | null
          cost?: number | null
          created_at?: string | null
          date?: string | null
          id?: number
          impressions?: number | null
          term_text?: string | null
        }
        Update: {
          ad_group_id?: number | null
          clicks?: number | null
          conversions?: number | null
          cost?: number | null
          created_at?: string | null
          date?: string | null
          id?: number
          impressions?: number | null
          term_text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "search_terms_ad_group_id_fkey"
            columns: ["ad_group_id"]
            isOneToOne: false
            referencedRelation: "ad_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      user_analysis_settings: {
        Row: {
          cpa_target: number | null
          created_at: string | null
          global_negative_keywords: string[] | null
          id: number
          roi_target: number | null
          user_id: string
        }
        Insert: {
          cpa_target?: number | null
          created_at?: string | null
          global_negative_keywords?: string[] | null
          id?: number
          roi_target?: number | null
          user_id: string
        }
        Update: {
          cpa_target?: number | null
          created_at?: string | null
          global_negative_keywords?: string[] | null
          id?: number
          roi_target?: number | null
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          name: string
          password_hash: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          name: string
          password_hash: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          name?: string
          password_hash?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      save_api_keys: {
        Args:
          | { api_name: string; api_key: string }
          | { key: string; meta: Json }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

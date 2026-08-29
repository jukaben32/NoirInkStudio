export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      ai_agents: {
        Row: {
          business_id: string
          calls_handled: number
          created_at: string
          greeting_message: string
          id: string
          language: string
          name: string
          personality: string
          sensitivity: number
          specialty: string | null
          status: string
          system_prompt: string
          title: string | null
          updated_at: string
          voice: string
        }
        Insert: {
          business_id: string
          calls_handled?: number
          created_at?: string
          greeting_message?: string
          id?: string
          language?: string
          name: string
          personality?: string
          sensitivity?: number
          specialty?: string | null
          status?: string
          system_prompt?: string
          title?: string | null
          updated_at?: string
          voice?: string
        }
        Update: {
          business_id?: string
          calls_handled?: number
          created_at?: string
          greeting_message?: string
          id?: string
          language?: string
          name?: string
          personality?: string
          sensitivity?: number
          specialty?: string | null
          status?: string
          system_prompt?: string
          title?: string | null
          updated_at?: string
          voice?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_agents_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_usage_events: {
        Row: {
          business_id: string
          conversation_id: string | null
          cost_usd: number
          created_at: string
          duration_seconds: number | null
          id: string
          input_tokens: number | null
          kind: string
          output_tokens: number | null
        }
        Insert: {
          business_id: string
          conversation_id?: string | null
          cost_usd?: number
          created_at?: string
          duration_seconds?: number | null
          id?: string
          input_tokens?: number | null
          kind: string
          output_tokens?: number | null
        }
        Update: {
          business_id?: string
          conversation_id?: string | null
          cost_usd?: number
          created_at?: string
          duration_seconds?: number | null
          id?: string
          input_tokens?: number | null
          kind?: string
          output_tokens?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_usage_events_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_usage_events_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      appointments: {
        Row: {
          agent_id: string | null
          business_id: string
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          confirmed_at: string | null
          conversation_id: string | null
          created_at: string
          id: string
          notes: string | null
          patient_id: string | null
          payment_amount: number | null
          payment_chain_id: number
          payment_currency: string
          payment_status: string
          payment_tx_hash: string | null
          reminder_sent_at: string | null
          requested_scheduled_at: string | null
          reschedule_requested_at: string | null
          rescheduled_from: string | null
          scheduled_at: string
          service_id: string | null
          source: string
          status: string
          updated_at: string
        }
        Insert: {
          agent_id?: string | null
          business_id: string
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          confirmed_at?: string | null
          conversation_id?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          patient_id?: string | null
          payment_amount?: number | null
          payment_chain_id?: number
          payment_currency?: string
          payment_status?: string
          payment_tx_hash?: string | null
          reminder_sent_at?: string | null
          requested_scheduled_at?: string | null
          reschedule_requested_at?: string | null
          rescheduled_from?: string | null
          scheduled_at: string
          service_id?: string | null
          source?: string
          status?: string
          updated_at?: string
        }
        Update: {
          agent_id?: string | null
          business_id?: string
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          confirmed_at?: string | null
          conversation_id?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          patient_id?: string | null
          payment_amount?: number | null
          payment_chain_id?: number
          payment_currency?: string
          payment_status?: string
          payment_tx_hash?: string | null
          reminder_sent_at?: string | null
          requested_scheduled_at?: string | null
          reschedule_requested_at?: string | null
          rescheduled_from?: string | null
          scheduled_at?: string
          service_id?: string | null
          source?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointments_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_rescheduled_from_fkey"
            columns: ["rescheduled_from"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "clinic_services"
            referencedColumns: ["id"]
          },
        ]
      }
      billing_transactions: {
        Row: {
          amount: number
          appointment_id: string | null
          business_id: string
          chain_id: number
          created_at: string
          currency: string
          id: string
          metadata: Json | null
          patient_id: string | null
          payment_type: string
          status: string
          tx_hash: string
          updated_at: string
        }
        Insert: {
          amount: number
          appointment_id?: string | null
          business_id: string
          chain_id?: number
          created_at?: string
          currency?: string
          id?: string
          metadata?: Json | null
          patient_id?: string | null
          payment_type?: string
          status?: string
          tx_hash: string
          updated_at?: string
        }
        Update: {
          amount?: number
          appointment_id?: string | null
          business_id?: string
          chain_id?: number
          created_at?: string
          currency?: string
          id?: string
          metadata?: Json | null
          patient_id?: string | null
          payment_type?: string
          status?: string
          tx_hash?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "billing_transactions_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "billing_transactions_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "billing_transactions_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      business_availability: {
        Row: {
          break_end: string | null
          break_start: string | null
          business_id: string
          close_time: string
          created_at: string
          day_of_week: number
          id: string
          is_active: boolean
          open_time: string
          slot_minutes: number
          updated_at: string
        }
        Insert: {
          break_end?: string | null
          break_start?: string | null
          business_id: string
          close_time?: string
          created_at?: string
          day_of_week: number
          id?: string
          is_active?: boolean
          open_time?: string
          slot_minutes?: number
          updated_at?: string
        }
        Update: {
          break_end?: string | null
          break_start?: string | null
          business_id?: string
          close_time?: string
          created_at?: string
          day_of_week?: number
          id?: string
          is_active?: boolean
          open_time?: string
          slot_minutes?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_availability_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      business_members: {
        Row: {
          business_id: string
          created_at: string
          id: string
          role: string
          updated_at: string
          user_id: string
        }
        Insert: {
          business_id: string
          created_at?: string
          id?: string
          role?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          business_id?: string
          created_at?: string
          id?: string
          role?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_members_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      business_stripe_accounts: {
        Row: {
          business_id: string
          connected_at: string | null
          created_at: string
          publishable_key: string | null
          secret_key_encrypted: string | null
          updated_at: string
        }
        Insert: {
          business_id: string
          connected_at?: string | null
          created_at?: string
          publishable_key?: string | null
          secret_key_encrypted?: string | null
          updated_at?: string
        }
        Update: {
          business_id?: string
          connected_at?: string | null
          created_at?: string
          publishable_key?: string | null
          secret_key_encrypted?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_stripe_accounts_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      business_subscriptions: {
        Row: {
          billing_enabled: boolean
          business_id: string
          cancel_at_period_end: boolean
          created_at: string
          current_period_end: string | null
          id: string
          plan: string
          status: string
          stripe_customer_id: string | null
          stripe_price_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          website_builder_enabled: boolean
        }
        Insert: {
          billing_enabled?: boolean
          business_id: string
          cancel_at_period_end?: boolean
          created_at?: string
          current_period_end?: string | null
          id?: string
          plan?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          website_builder_enabled?: boolean
        }
        Update: {
          billing_enabled?: boolean
          business_id?: string
          cancel_at_period_end?: boolean
          created_at?: string
          current_period_end?: string | null
          id?: string
          plan?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          website_builder_enabled?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "business_subscriptions_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      businesses: {
        Row: {
          address: string | null
          booking_deposit_amount: number | null
          booking_email: string | null
          city: string | null
          contact_email: string | null
          created_at: string
          description: string | null
          id: string
          logo_url: string | null
          name: string
          onboarding_step: string
          owner_id: string
          payment_chain_id: number
          payment_currency: string
          payment_wallet_address: string | null
          phone: string | null
          slug: string
          specialty: string | null
          state: string | null
          timezone: string
          updated_at: string
          website: string | null
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          booking_deposit_amount?: number | null
          booking_email?: string | null
          city?: string | null
          contact_email?: string | null
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          name: string
          onboarding_step?: string
          owner_id: string
          payment_chain_id?: number
          payment_currency?: string
          payment_wallet_address?: string | null
          phone?: string | null
          slug: string
          specialty?: string | null
          state?: string | null
          timezone?: string
          updated_at?: string
          website?: string | null
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          booking_deposit_amount?: number | null
          booking_email?: string | null
          city?: string | null
          contact_email?: string | null
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          onboarding_step?: string
          owner_id?: string
          payment_chain_id?: number
          payment_currency?: string
          payment_wallet_address?: string | null
          phone?: string | null
          slug?: string
          specialty?: string | null
          state?: string | null
          timezone?: string
          updated_at?: string
          website?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      clinic_services: {
        Row: {
          active: boolean
          business_id: string
          color: string | null
          created_at: string
          currency: string
          description: string | null
          duration_minutes: number
          id: string
          instructions: string | null
          name: string
          price: number | null
          price_max: number | null
          price_min: number | null
          price_type: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          active?: boolean
          business_id: string
          color?: string | null
          created_at?: string
          currency?: string
          description?: string | null
          duration_minutes?: number
          id?: string
          instructions?: string | null
          name: string
          price?: number | null
          price_max?: number | null
          price_min?: number | null
          price_type?: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          active?: boolean
          business_id?: string
          color?: string | null
          created_at?: string
          currency?: string
          description?: string | null
          duration_minutes?: number
          id?: string
          instructions?: string | null
          name?: string
          price?: number | null
          price_max?: number | null
          price_min?: number | null
          price_type?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "clinic_services_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      closed_dates: {
        Row: {
          blocked_date: string
          business_id: string
          created_at: string
          id: string
          reason: string | null
        }
        Insert: {
          blocked_date: string
          business_id: string
          created_at?: string
          id?: string
          reason?: string | null
        }
        Update: {
          blocked_date?: string
          business_id?: string
          created_at?: string
          id?: string
          reason?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "closed_dates_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      conversation_messages: {
        Row: {
          business_id: string
          content: string
          conversation_id: string
          created_at: string
          id: string
          role: string
        }
        Insert: {
          business_id: string
          content: string
          conversation_id: string
          created_at?: string
          id?: string
          role: string
        }
        Update: {
          business_id?: string
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversation_messages_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversation_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          agent_id: string | null
          appointment_id: string | null
          business_id: string
          channel: string
          created_at: string
          duration_seconds: number
          ended_at: string | null
          id: string
          outcome: string | null
          patient_id: string | null
          sentiment: string | null
          started_at: string
          status: string
          transcript_summary: string | null
        }
        Insert: {
          agent_id?: string | null
          appointment_id?: string | null
          business_id: string
          channel?: string
          created_at?: string
          duration_seconds?: number
          ended_at?: string | null
          id?: string
          outcome?: string | null
          patient_id?: string | null
          sentiment?: string | null
          started_at?: string
          status?: string
          transcript_summary?: string | null
        }
        Update: {
          agent_id?: string | null
          appointment_id?: string | null
          business_id?: string
          channel?: string
          created_at?: string
          duration_seconds?: number
          ended_at?: string | null
          id?: string
          outcome?: string | null
          patient_id?: string | null
          sentiment?: string | null
          started_at?: string
          status?: string
          transcript_summary?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversations_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      knowledge_documents: {
        Row: {
          answer: string | null
          business_id: string
          catalog_key: string | null
          category: string | null
          created_at: string
          id: string
          is_active: boolean
          question: string | null
          source_url: string | null
          title: string
          updated_at: string
        }
        Insert: {
          answer?: string | null
          business_id: string
          catalog_key?: string | null
          category?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          question?: string | null
          source_url?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          answer?: string | null
          business_id?: string
          catalog_key?: string | null
          category?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          question?: string | null
          source_url?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "knowledge_documents_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          business_id: string
          category: string
          created_at: string
          data: Json | null
          id: string
          message: string
          read_at: string | null
          title: string
        }
        Insert: {
          business_id: string
          category?: string
          created_at?: string
          data?: Json | null
          id?: string
          message: string
          read_at?: string | null
          title: string
        }
        Update: {
          business_id?: string
          category?: string
          created_at?: string
          data?: Json | null
          id?: string
          message?: string
          read_at?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      patients: {
        Row: {
          allergy_notes: string | null
          auth_user_id: string | null
          business_id: string
          created_at: string
          date_of_birth: string | null
          email: string | null
          id: string
          name: string
          notes: string | null
          phone: string | null
          source: string
          updated_at: string
        }
        Insert: {
          allergy_notes?: string | null
          auth_user_id?: string | null
          business_id: string
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          id?: string
          name: string
          notes?: string | null
          phone?: string | null
          source?: string
          updated_at?: string
        }
        Update: {
          allergy_notes?: string | null
          auth_user_id?: string | null
          business_id?: string
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          source?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "patients_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      support_messages: {
        Row: {
          business_id: string
          content: string
          created_at: string
          id: string
          sender_type: string
          ticket_id: string
        }
        Insert: {
          business_id: string
          content: string
          created_at?: string
          id?: string
          sender_type: string
          ticket_id: string
        }
        Update: {
          business_id?: string
          content?: string
          created_at?: string
          id?: string
          sender_type?: string
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "support_messages_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "support_messages_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "support_tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      support_tickets: {
        Row: {
          appointment_id: string | null
          business_id: string
          created_at: string
          description: string | null
          id: string
          patient_id: string | null
          priority: string
          status: string
          subject: string
          updated_at: string
        }
        Insert: {
          appointment_id?: string | null
          business_id: string
          created_at?: string
          description?: string | null
          id?: string
          patient_id?: string | null
          priority?: string
          status?: string
          subject: string
          updated_at?: string
        }
        Update: {
          appointment_id?: string | null
          business_id?: string
          created_at?: string
          description?: string | null
          id?: string
          patient_id?: string | null
          priority?: string
          status?: string
          subject?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "support_tickets_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "support_tickets_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "support_tickets_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      website_faqs: {
        Row: {
          answer: string
          business_id: string
          created_at: string
          id: string
          question: string
          sort_order: number
        }
        Insert: {
          answer: string
          business_id: string
          created_at?: string
          id?: string
          question: string
          sort_order?: number
        }
        Update: {
          answer?: string
          business_id?: string
          created_at?: string
          id?: string
          question?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "website_faqs_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      website_services: {
        Row: {
          business_id: string
          created_at: string
          description: string | null
          duration: string | null
          icon: string
          id: string
          name: string
          price: string | null
          sort_order: number
          updated_at: string
        }
        Insert: {
          business_id: string
          created_at?: string
          description?: string | null
          duration?: string | null
          icon?: string
          id?: string
          name: string
          price?: string | null
          sort_order?: number
          updated_at?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          description?: string | null
          duration?: string | null
          icon?: string
          id?: string
          name?: string
          price?: string | null
          sort_order?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "website_services_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      website_specialties: {
        Row: {
          business_id: string
          created_at: string
          id: string
          label: string
          sort_order: number
        }
        Insert: {
          business_id: string
          created_at?: string
          id?: string
          label: string
          sort_order?: number
        }
        Update: {
          business_id?: string
          created_at?: string
          id?: string
          label?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "website_specialties_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      website_subscribers: {
        Row: {
          business_id: string
          created_at: string
          email: string
          id: string
          message: string | null
          name: string | null
          phone: string | null
          source: string
        }
        Insert: {
          business_id: string
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name?: string | null
          phone?: string | null
          source?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string | null
          phone?: string | null
          source?: string
        }
        Relationships: [
          {
            foreignKeyName: "website_subscribers_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      website_team_members: {
        Row: {
          bio: string | null
          business_id: string
          created_at: string
          id: string
          name: string
          photo_url: string | null
          role: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          bio?: string | null
          business_id: string
          created_at?: string
          id?: string
          name: string
          photo_url?: string | null
          role: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          bio?: string | null
          business_id?: string
          created_at?: string
          id?: string
          name?: string
          photo_url?: string | null
          role?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "website_team_members_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      website_testimonials: {
        Row: {
          author_name: string
          author_role: string | null
          business_id: string
          created_at: string
          id: string
          quote: string
          rating: number
          sort_order: number
          updated_at: string
        }
        Insert: {
          author_name: string
          author_role?: string | null
          business_id: string
          created_at?: string
          id?: string
          quote: string
          rating?: number
          sort_order?: number
          updated_at?: string
        }
        Update: {
          author_name?: string
          author_role?: string | null
          business_id?: string
          created_at?: string
          id?: string
          quote?: string
          rating?: number
          sort_order?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "website_testimonials_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      websites: {
        Row: {
          about_photo_url: string | null
          about_story: string | null
          about_title: string
          agent_id: string | null
          business_id: string
          contact_address: string | null
          contact_email: string | null
          contact_hours: string | null
          contact_maps_url: string | null
          contact_phone: string | null
          created_at: string
          cta_primary_text: string
          cta_secondary_text: string
          featured_service_ids: string[]
          font: string
          footer_copyright: string | null
          footer_tagline: string | null
          hero_headline: string | null
          hero_image_url: string | null
          hero_subheadline: string | null
          id: string
          logo_url: string | null
          patients_served: number | null
          primary_color: string
          published: boolean
          satisfaction_pct: number | null
          secondary_color: string
          site_description: string
          site_title: string
          slug: string
          social_facebook: string | null
          social_instagram: string | null
          social_linkedin: string | null
          social_pinterest: string | null
          social_tiktok: string | null
          social_twitter: string | null
          social_youtube: string | null
          template: string
          trust_badges: string[]
          updated_at: string
          years_experience: number | null
        }
        Insert: {
          about_photo_url?: string | null
          about_story?: string | null
          about_title?: string
          agent_id?: string | null
          business_id: string
          contact_address?: string | null
          contact_email?: string | null
          contact_hours?: string | null
          contact_maps_url?: string | null
          contact_phone?: string | null
          created_at?: string
          cta_primary_text?: string
          cta_secondary_text?: string
          featured_service_ids?: string[]
          font?: string
          footer_copyright?: string | null
          footer_tagline?: string | null
          hero_headline?: string | null
          hero_image_url?: string | null
          hero_subheadline?: string | null
          id?: string
          logo_url?: string | null
          patients_served?: number | null
          primary_color?: string
          published?: boolean
          satisfaction_pct?: number | null
          secondary_color?: string
          site_description: string
          site_title: string
          slug: string
          social_facebook?: string | null
          social_instagram?: string | null
          social_linkedin?: string | null
          social_pinterest?: string | null
          social_tiktok?: string | null
          social_twitter?: string | null
          social_youtube?: string | null
          template?: string
          trust_badges?: string[]
          updated_at?: string
          years_experience?: number | null
        }
        Update: {
          about_photo_url?: string | null
          about_story?: string | null
          about_title?: string
          agent_id?: string | null
          business_id?: string
          contact_address?: string | null
          contact_email?: string | null
          contact_hours?: string | null
          contact_maps_url?: string | null
          contact_phone?: string | null
          created_at?: string
          cta_primary_text?: string
          cta_secondary_text?: string
          featured_service_ids?: string[]
          font?: string
          footer_copyright?: string | null
          footer_tagline?: string | null
          hero_headline?: string | null
          hero_image_url?: string | null
          hero_subheadline?: string | null
          id?: string
          logo_url?: string | null
          patients_served?: number | null
          primary_color?: string
          published?: boolean
          satisfaction_pct?: number | null
          secondary_color?: string
          site_description?: string
          site_title?: string
          slug?: string
          social_facebook?: string | null
          social_instagram?: string | null
          social_linkedin?: string | null
          social_pinterest?: string | null
          social_tiktok?: string | null
          social_twitter?: string | null
          social_youtube?: string | null
          template?: string
          trust_badges?: string[]
          updated_at?: string
          years_experience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "websites_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "websites_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      whatsapp_connections: {
        Row: {
          agent_id: string | null
          business_id: string
          created_at: string
          id: string
          instance_name: string
          instance_token: string | null
          is_enabled: boolean
          phone_number: string | null
          provider: string
          status: string
          updated_at: string
        }
        Insert: {
          agent_id?: string | null
          business_id: string
          created_at?: string
          id?: string
          instance_name: string
          instance_token?: string | null
          is_enabled?: boolean
          phone_number?: string | null
          provider?: string
          status?: string
          updated_at?: string
        }
        Update: {
          agent_id?: string | null
          business_id?: string
          created_at?: string
          id?: string
          instance_name?: string
          instance_token?: string | null
          is_enabled?: boolean
          phone_number?: string | null
          provider?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "whatsapp_connections_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "whatsapp_connections_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      widgets: {
        Row: {
          agent_id: string | null
          allowed_origins: string[]
          business_id: string
          created_at: string
          enabled: boolean
          greeting_message: string
          id: string
          impressions: number
          interactions: number
          name: string
          position: string
          primary_color: string
          secondary_color: string
          show_branding: boolean
          slot_duration: number
          slug: string
          theme: string
          tone: string
          updated_at: string
        }
        Insert: {
          agent_id?: string | null
          allowed_origins?: string[]
          business_id: string
          created_at?: string
          enabled?: boolean
          greeting_message?: string
          id?: string
          impressions?: number
          interactions?: number
          name?: string
          position?: string
          primary_color?: string
          secondary_color?: string
          show_branding?: boolean
          slot_duration?: number
          slug: string
          theme?: string
          tone?: string
          updated_at?: string
        }
        Update: {
          agent_id?: string | null
          allowed_origins?: string[]
          business_id?: string
          created_at?: string
          enabled?: boolean
          greeting_message?: string
          id?: string
          impressions?: number
          interactions?: number
          name?: string
          position?: string
          primary_color?: string
          secondary_color?: string
          show_branding?: boolean
          slot_duration?: number
          slug?: string
          theme?: string
          tone?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "widgets_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "widgets_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_business_access: {
        Args: { target_business_id: string }
        Returns: boolean
      }
      is_business_owner: {
        Args: { target_business_id: string }
        Returns: boolean
      }
      is_patient_owner: {
        Args: { target_patient_id: string }
        Returns: boolean
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

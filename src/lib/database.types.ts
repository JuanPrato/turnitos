export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          created_at: string | null
          dni: string
          name: string
          phone: string
        }
        Insert: {
          created_at?: string | null
          dni: string
          name: string
          phone: string
        }
        Update: {
          created_at?: string | null
          dni?: string
          name?: string
          phone?: string
        }
        Relationships: []
      }
      service: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
        }
        Relationships: []
      }
      turn: {
        Row: {
          client: string
          created_at: string | null
          employee: string
          end_at: string | null
          id: number
          start_at: string | null
        }
        Insert: {
          client: string
          created_at?: string | null
          employee: string
          end_at?: string | null
          id?: number
          start_at?: string | null
        }
        Update: {
          client?: string
          created_at?: string | null
          employee?: string
          end_at?: string | null
          id?: number
          start_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "turn_client_fkey"
            columns: ["client"]
            referencedRelation: "clients"
            referencedColumns: ["dni"]
          }
        ]
      }
      turn_services: {
        Row: {
          service_id: number
          turn_id: number
        }
        Insert: {
          service_id: number
          turn_id: number
        }
        Update: {
          service_id?: number
          turn_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "turn_services_service_id_fkey"
            columns: ["service_id"]
            referencedRelation: "service"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "turn_services_turn_id_fkey"
            columns: ["turn_id"]
            referencedRelation: "turn"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

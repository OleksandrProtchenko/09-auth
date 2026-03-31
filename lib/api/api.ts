import { CreateNote, Note, NoteFilter } from "@/types/note";
import axios, { type AxiosResponse } from "axios";

export const nextServer = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  withCredentials: true,
});

export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
  tag?: NoteFilter;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  params: FetchNotesParams,
): Promise<FetchNotesResponse> => {
  const response: AxiosResponse<FetchNotesResponse> = await nextServer.get(
    "/notes",
    {
      params,
    },
  );
  return response.data;
};

export const createNote = async (payload: CreateNote): Promise<Note> => {
  const { data }: AxiosResponse<Note> = await nextServer.post(
    "/notes",
    payload,
    {},
  );
  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data }: AxiosResponse<Note> = await nextServer.delete(`/notes/${id}`);
  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data }: AxiosResponse<Note> = await nextServer.get(`/notes/${id}`);
  return data;
};

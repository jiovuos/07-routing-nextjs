import BackModal from "@/components/Modal/BackModal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { fetchNoteById } from "@/lib/api";

type MaybePromise<T> = T | Promise<T>;
type PageProps = { params: MaybePromise<{ id: string }> };

export default async function NoteModalPage({ params }: PageProps) {
  const { id } = await Promise.resolve(params);
  const note = await fetchNoteById(id);

  return (
    <BackModal>
      <NotePreview note={note} />
    </BackModal>
  );
}

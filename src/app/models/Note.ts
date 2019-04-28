export interface Note {
    NoteId?: number;
    OwnderId?: number;
    Title: string;
    Content: string;
    IsStarred?: boolean;
    CreatedUtc?: Date;
    ModifiedUtc?: Date;
}
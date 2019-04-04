import mongoose, { Schema, Document } from 'mongoose';

export interface IVoteSubjectId {
  questionId?: number,
  answerId?: number,
}

export interface IVote extends IVoteSubjectId, Document {
  _id: number,
  userId: number,
  value: number,
}

const voteSchema = new Schema({
    _id: { type: Number, required: true },
    userId: { type: Number, required: true },
    questionId: { type: Number, required: false },
    answerId: { type: Number, required: false },
    value: { type: Number, required: true },
    voteTime: { type: Date, require: true }
}, {
    timestamps: {
      createdAt: 'voteTime'
    },
});

const Vote = mongoose.model<IVote>("Vote", voteSchema)

export default Vote;
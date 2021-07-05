import express, { NextFunction, Request, Response } from "express";
import { Interface } from "readline";
import connect from "../db";
import Subscriber from "../model/subscriber";
const router = express.Router();
connect("subscribers");

interface SubscriberRequest extends Request {
  subscriber?: any;
}

// Get all
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get specific
router.get("/:id", getSubscriber, async (req: SubscriberRequest, res) => {
  res.json(req.subscriber);
});

// Create
router.post("/", async (req, res) => {
  const { name, subscribeToChannel } = req.body;
  const subscriber = new Subscriber({
    name,
    subscribeToChannel,
  });

  try {
    const newSubscriber = await subscriber.save();
    res.json(newSubscriber).status(201);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update
router.patch("/:id", getSubscriber, async (req: SubscriberRequest, res) => {
  if (req.body.name !== null) req.subscriber.name = req.body.name;
  if (req.body.subscribeToChannel !== null)
    req.subscriber.subscribeToChannel = req.body.subscribeToChannel;
  try {
    const updated = await req.subscriber.save();
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete("/:id", getSubscriber, async (req: SubscriberRequest, res) => {
  try {
    await req.subscriber!.remove();
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// middleware function
async function getSubscriber(
  req: SubscriberRequest,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  let subscriber;
  try {
    subscriber = await Subscriber.findById(id);
    if (subscriber == null)
      return res
        .status(404)
        .json({ message: `subscriber with ${id} is not found` });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  req.subscriber = subscriber;
  next();
}

module.exports = router;

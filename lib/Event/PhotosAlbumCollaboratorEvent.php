<?php

namespace OCA\Photos\Event;

use OCP\EventDispatcher\Event;

/**
 * Event dispatched when collaborators are changed for an album.
 */
class PhotosAlbumCollaboratorEvent extends Event {
    /** @var int */
    private $albumId;

    /** @var array */
    private $collaboratorsRemoved;

    /** @var array */
    private $collaboratorsAdded;

    /**
     * @param int $albumId The ID of the album to which the photo is added
     * @param int $fileId The ID of the file being added
     * @param string $owner The user who owns the photo
     */
    public function __construct(int $albumId, array $collaboratorsRemoved, array $collaboratorsAdded) {
        parent::__construct();
        $this->albumId = $albumId;
        $this->collaboratorsRemoved = $collaboratorsRemoved;
        $this->collaboratorsAdded = $collaboratorsAdded;
    }

    /**
     * Get the album ID.
     *
     * @return int
     */
    public function getAlbumId(): int {
        return $this->albumId;
    }

    /**
     * Get collaborators removed.
     * 
     * @return array
     */
    public function getCollaboratorsRemoved(): array {
        return $this->collaboratorsRemoved;
    }

    /**
     * Get collaborators added.
     * 
     * @return array
     */
    public function getCollaboratorsAdded(): array {
        return $this->collaboratorsAdded;
    }
}
